/*
  # Add ultima_hora field to articles table

  1. Changes
    - Add `ultima_hora` boolean field to `articles` table with default value of false
    - This field will be used to mark articles that are urgent/breaking news
  
  2. Security
    - Maintains existing row level security settings
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'ultima_hora'
  ) THEN
    ALTER TABLE articles ADD COLUMN ultima_hora boolean DEFAULT false;
  END IF;
END $$;
