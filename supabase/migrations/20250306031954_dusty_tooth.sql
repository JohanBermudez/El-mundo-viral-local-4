/*
  # Initial schema for El Mundo Viral

  1. New Tables
    - `articles`: Stores all news articles
      - `id` (uuid, primary key)
      - `titulo` (text, title of the article)
      - `slug` (text unique, URL-friendly identifier)
      - `extracto` (text, brief summary of the article)
      - `contenido` (text, full article content)
      - `imagen_principal` (text, URL to the main image)
      - `created_at` (timestamptz, when the article was created)
      - `updated_at` (timestamptz, when the article was last updated)
      - `destacado` (boolean, if the article is featured)
      - `trending` (boolean, if the article is trending)
      - `viral` (boolean, if the article is viral)
    
    - `categories`: Stores content categories
      - `id` (uuid, primary key)
      - `nombre` (text, category name)
      - `slug` (text unique, URL-friendly identifier)
      - `descripcion` (text, category description)
    
    - `article_categories`: Many-to-many relationship between articles and categories
      - `article_id` (uuid, references articles.id)
      - `category_id` (uuid, references categories.id)
      - Composite primary key (article_id, category_id)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to perform CRUD operations
    - Add policies for anonymous users to read public data
*/

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo text NOT NULL,
  slug text NOT NULL UNIQUE,
  extracto text NOT NULL,
  contenido text NOT NULL,
  imagen_principal text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  destacado boolean DEFAULT false,
  trending boolean DEFAULT false,
  viral boolean DEFAULT false
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  slug text NOT NULL UNIQUE,
  descripcion text NOT NULL
);

-- Create article_categories junction table
CREATE TABLE IF NOT EXISTS article_categories (
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, category_id)
);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_categories ENABLE ROW LEVEL SECURITY;

-- Policies for articles table
CREATE POLICY "Anyone can read articles" 
  ON articles FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can insert articles" 
  ON articles FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update their articles" 
  ON articles FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Authenticated users can delete their articles" 
  ON articles FOR DELETE 
  TO authenticated 
  USING (true);

-- Policies for categories table
CREATE POLICY "Anyone can read categories" 
  ON categories FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can insert categories" 
  ON categories FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories" 
  ON categories FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Authenticated users can delete categories" 
  ON categories FOR DELETE 
  TO authenticated 
  USING (true);

-- Policies for article_categories table
CREATE POLICY "Anyone can read article_categories" 
  ON article_categories FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can insert article_categories" 
  ON article_categories FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update article_categories" 
  ON article_categories FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "Authenticated users can delete article_categories" 
  ON article_categories FOR DELETE 
  TO authenticated 
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at when an article is updated
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON articles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
