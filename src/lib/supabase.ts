import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Get environment variables
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Log connection details for debugging (remove in production)
console.log('Supabase Connection Details:');
console.log('URL available:', !!supabaseUrl);
console.log('Key available:', !!supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Check your .env file.');
}

// Determine if we're in a production environment
const isProduction = import.meta.env.PROD;

// Create Supabase client with fallback URL and key for SSG
const PLACEHOLDER_URL = 'https://placeholder-project.supabase.co';
const PLACEHOLDER_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiJ9.placeholder';

export const supabase = createClient<Database>(
  supabaseUrl || PLACEHOLDER_URL,
  supabaseAnonKey || PLACEHOLDER_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    }
  }
);

// Check if we can connect to Supabase
export async function canConnectToSupabase() {
  try {
    const { error } = await supabase.from('articles').select('id').limit(1);
    return !error;
  } catch (e) {
    console.error('Error checking Supabase connection:', e);
    return false;
  }
}

// Mock data for static generation when Supabase is not available
const mockCategories = [
  { id: 'cat-1', nombre: 'Tecnología', slug: 'tecnologia', descripcion: 'Noticias sobre tecnología e innovación' },
  { id: 'cat-2', nombre: 'Economía', slug: 'economia', descripcion: 'Información económica y financiera' },
  { id: 'cat-3', nombre: 'Deporte', slug: 'deporte', descripcion: 'Todas las novedades deportivas' },
  { id: 'cat-4', nombre: 'Política', slug: 'politica', descripcion: 'Actualidad política nacional e internacional' },
  { id: 'cat-5', nombre: 'Entretenimiento', slug: 'entretenimiento', descripcion: 'Noticias sobre cine, música y cultura' },
  { id: 'cat-6', nombre: 'Subsidios', slug: 'subsidios', descripcion: 'Información sobre subsidios y ayudas estatales' }
];

// Data fetching helpers with proper error handling and static fallbacks
export async function getCategories() {
  try {
    console.log('Fetching categories...');
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock categories data for static generation');
      return { categories: mockCategories, error: null };
    }
    
    const { data, error, status } = await supabase
      .from('categories')
      .select('*')
      .order('nombre');
    
    console.log('Categories API response:', { status, count: data?.length, error });
    
    if (error) {
      throw error;
    }
    
    return { categories: data || [], error: null };
  } catch (error) {
    console.error('Error fetching categories:', error);
    
    // Return mock data if in a production environment
    if (isProduction) {
      return { categories: mockCategories, error: null };
    }
    
    // Return empty array instead of null to prevent errors in components
    return { categories: [], error };
  }
}

export async function getCategoryById(id: string) {
  try {
    if (!id) {
      throw new Error('Category ID is required');
    }
    
    console.log(`Fetching category by id: ${id}`);
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock category data for static generation');
      const mockCategory = mockCategories.find(c => c.id === id);
      if (mockCategory) {
        return { category: mockCategory, error: null };
      }
    }
    
    const { data, error, status } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single();
    
    console.log('Category API response:', { status, found: !!data, error });
    
    if (error) {
      throw error;
    }
    
    return { category: data, error: null };
  } catch (error) {
    console.error(`Error fetching category by id (${id}):`, error);
    
    // In production, try to find a mock category
    if (isProduction) {
      const mockCategory = mockCategories.find(c => c.id === id);
      if (mockCategory) {
        return { category: mockCategory, error: null };
      }
    }
    
    return { category: null, error };
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    if (!slug) {
      throw new Error('Category slug is required');
    }
    
    console.log(`Fetching category by slug: ${slug}`);
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock category data for static generation');
      const mockCategory = mockCategories.find(c => c.slug === slug);
      if (mockCategory) {
        return { category: mockCategory, error: null };
      }
    }
    
    const { data, error, status } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();
    
    console.log('Category API response:', { status, found: !!data, error });
    
    if (error) {
      throw error;
    }
    
    return { category: data, error: null };
  } catch (error) {
    console.error(`Error fetching category by slug (${slug}):`, error);
    
    // In production, try to find a mock category
    if (isProduction) {
      const mockCategory = mockCategories.find(c => c.slug === slug);
      if (mockCategory) {
        return { category: mockCategory, error: null };
      }
    }
    
    return { category: null, error };
  }
}

// Generate mock articles for static generation
function generateMockArticles(count = 10, options = {}) {
  const mockArticles = [];
  
  for (let i = 0; i < count; i++) {
    mockArticles.push({
      id: `mock-${i}`,
      titulo: `Artículo de ejemplo #${i + 1}`,
      slug: `articulo-ejemplo-${i + 1}`,
      extracto: 'Este es un extracto de ejemplo para la generación estática del sitio.',
      contenido: '<p>Contenido completo del artículo de ejemplo. Este texto simula el contenido que normalmente se obtendría de la base de datos.</p>',
      imagen_principal: `https://source.unsplash.com/random/800x450?sig=${i}`,
      created_at: new Date(Date.now() - i * 3600000).toISOString(),
      updated_at: new Date(Date.now() - i * 3600000).toISOString(),
      destacado: i < 3,
      trending: i >= 3 && i < 6,
      viral: i >= 6 && i < 9,
      ultima_hora: i < 4,
      article_categories: [
        {
          categories: mockCategories[i % mockCategories.length]
        },
        {
          categories: mockCategories[(i + 1) % mockCategories.length]
        }
      ]
    });
  }
  
  return mockArticles;
}

export async function getArticles({ 
  limit = 10, 
  offset = 0, 
  categorySlug = null,
  featured = null,
  trending = null,
  viral = null,
  ultimaHora = null,
  hoursAgo = null
}: {
  limit?: number;
  offset?: number;
  categorySlug?: string | null;
  featured?: boolean | null;
  trending?: boolean | null;
  viral?: boolean | null;
  ultimaHora?: boolean | null;
  hoursAgo?: number | null;
}) {
  try {
    console.log('Fetching articles with params:', { 
      limit, offset, categorySlug, featured, trending, viral, ultimaHora, hoursAgo 
    });
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock articles data for static generation');
      let mockArticles = generateMockArticles(20);
      
      // Apply filters to mock data
      if (categorySlug) {
        const categoryId = mockCategories.find(c => c.slug === categorySlug)?.id;
        if (categoryId) {
          mockArticles = mockArticles.filter(article => 
            article.article_categories.some(ac => ac.categories.id === categoryId)
          );
        }
      }
      
      if (featured !== null) {
        mockArticles = mockArticles.filter(article => article.destacado === featured);
      }
      
      if (trending !== null) {
        mockArticles = mockArticles.filter(article => article.trending === trending);
      }
      
      if (viral !== null) {
        mockArticles = mockArticles.filter(article => article.viral === viral);
      }
      
      if (ultimaHora !== null) {
        mockArticles = mockArticles.filter(article => article.ultima_hora === ultimaHora);
      }
      
      if (hoursAgo !== null) {
        const hoursAgoDate = new Date();
        hoursAgoDate.setHours(hoursAgoDate.getHours() - hoursAgo);
        mockArticles = mockArticles.filter(article => 
          new Date(article.created_at) >= hoursAgoDate
        );
      }
      
      // Apply pagination
      const paginatedArticles = mockArticles.slice(offset, offset + limit);
      
      return { 
        articles: paginatedArticles, 
        error: null, 
        count: mockArticles.length 
      };
    }
    
    // Start building query
    let query = supabase
      .from('articles')
      .select(`
        *,
        article_categories (
          categories (*)
        )
      `, { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    // Apply filters if provided
    if (categorySlug) {
      query = query.eq('article_categories.categories.slug', categorySlug);
    }

    if (featured !== null) {
      query = query.eq('destacado', featured);
    }

    if (trending !== null) {
      query = query.eq('trending', trending);
    }

    if (viral !== null) {
      query = query.eq('viral', viral);
    }
    
    if (ultimaHora !== null) {
      query = query.eq('ultima_hora', ultimaHora);
    }
    
    // Filter by recent time (for última hora)
    if (hoursAgo !== null) {
      const hoursAgoDate = new Date();
      hoursAgoDate.setHours(hoursAgoDate.getHours() - hoursAgo);
      
      query = query.gte('created_at', hoursAgoDate.toISOString());
    }

    const { data, error, count, status } = await query;
    
    console.log('Articles API response:', { 
      status, 
      count: data?.length, 
      totalCount: count,
      firstArticleId: data && data.length > 0 ? data[0].id : 'none',
      error 
    });
    
    if (error) {
      throw error;
    }
    
    return { articles: data || [], error: null, count };
  } catch (error) {
    console.error('Error fetching articles:', error);
    
    // Use mock data in production
    if (isProduction) {
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null, count: limit };
    }
    
    return { articles: [], error, count: 0 };
  }
}

export async function getRecentArticles(hoursAgo = 2, limit = 6) {
  try {
    const hoursAgoDate = new Date();
    hoursAgoDate.setHours(hoursAgoDate.getHours() - hoursAgo);
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock recent articles data for static generation');
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
    
    const { data, error, status } = await supabase
      .from('articles')
      .select(`
        *,
        article_categories (
          categories (*)
        )
      `)
      .gte('created_at', hoursAgoDate.toISOString())
      .order('created_at', { ascending: false })
      .limit(limit);
    
    console.log('Recent articles API response:', { 
      status, 
      count: data?.length,
      timeFilter: hoursAgoDate.toISOString(),
      error 
    });
    
    if (error) {
      throw error;
    }
    
    return { articles: data || [], error: null };
  } catch (error) {
    console.error('Error fetching recent articles:', error);
    
    // Use mock data in production
    if (isProduction) {
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
    
    return { articles: [], error };
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    if (!slug) {
      throw new Error('Article slug is required');
    }
    
    console.log(`Fetching article by slug: ${slug}`);
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock article data for static generation');
      const mockArticles = generateMockArticles(20);
      const mockArticle = mockArticles.find(a => a.slug === slug);
      if (mockArticle) {
        return { article: mockArticle, error: null };
      }
    }
    
    const { data, error, status } = await supabase
      .from('articles')
      .select(`
        *,
        article_categories (
          categories (*)
        )
      `)
      .eq('slug', slug)
      .single();
    
    console.log('Article API response:', { status, found: !!data, error });
    
    if (error) {
      throw error;
    }
    
    return { article: data, error: null };
  } catch (error) {
    console.error(`Error fetching article by slug (${slug}):`, error);
    
    // Use mock data in production
    if (isProduction) {
      const mockArticles = generateMockArticles(20);
      const mockArticle = mockArticles.find(a => a.slug === slug);
      if (mockArticle) {
        return { article: mockArticle, error: null };
      }
    }
    
    return { article: null, error };
  }
}

export async function getArticleById(id: string) {
  try {
    if (!id) {
      throw new Error('Article ID is required');
    }
    
    console.log(`Fetching article by id: ${id}`);
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock article data for static generation');
      const mockArticles = generateMockArticles(20);
      const mockArticle = mockArticles.find(a => a.id === id);
      if (mockArticle) {
        return { article: mockArticle, error: null };
      }
    }
    
    const { data, error, status } = await supabase
      .from('articles')
      .select(`
        *,
        article_categories (
          categories (*)
        )
      `)
      .eq('id', id)
      .single();
    
    console.log('Article API response:', { status, found: !!data, error });
    
    if (error) {
      throw error;
    }
    
    return { article: data, error: null };
  } catch (error) {
    console.error(`Error fetching article by id (${id}):`, error);
    
    // Use mock data in production
    if (isProduction) {
      const mockArticles = generateMockArticles(20);
      const mockArticle = mockArticles.find(a => a.id === id);
      if (mockArticle) {
        return { article: mockArticle, error: null };
      }
    }
    
    return { article: null, error };
  }
}

export async function getRelatedArticles(articleId: string, categoryIds: string[], limit = 3) {
  try {
    if (!articleId) {
      throw new Error('Article ID is required');
    }
    
    console.log(`Fetching related articles for article: ${articleId}`);
    
    // Check if Supabase is available
    const canConnect = await canConnectToSupabase();
    
    if (!canConnect) {
      console.log('Using mock related articles data for static generation');
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
    
    if (!categoryIds.length) {
      return { articles: [], error: null };
    }
    
    const { data, error, status } = await supabase
      .from('articles')
      .select(`
        *,
        article_categories (
          categories (*)
        )
      `)
      .in('article_categories.category_id', categoryIds)
      .neq('id', articleId)
      .order('created_at', { ascending: false })
      .limit(limit);
    
    console.log('Related articles API response:', { status, count: data?.length, error });
    
    if (error) {
      throw error;
    }
    
    return { articles: data || [], error: null };
  } catch (error) {
    console.error(`Error fetching related articles for article (${articleId}):`, error);
    
    // Use mock data in production
    if (isProduction) {
      const mockArticles = generateMockArticles(limit);
      return { articles: mockArticles, error: null };
    }
    
    return { articles: [], error };
  }
}
