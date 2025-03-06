export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string
          titulo: string
          slug: string
          extracto: string
          contenido: string
          imagen_principal: string
          created_at: string
          updated_at: string
          destacado: boolean
          trending: boolean
          viral: boolean
          ultima_hora: boolean
        }
        Insert: {
          id?: string
          titulo: string
          slug: string
          extracto: string
          contenido: string
          imagen_principal: string
          created_at?: string
          updated_at?: string
          destacado?: boolean
          trending?: boolean
          viral?: boolean
          ultima_hora?: boolean
        }
        Update: {
          id?: string
          titulo?: string
          slug?: string
          extracto?: string
          contenido?: string
          imagen_principal?: string
          created_at?: string
          updated_at?: string
          destacado?: boolean
          trending?: boolean
          viral?: boolean
          ultima_hora?: boolean
        }
      }
      article_categories: {
        Row: {
          article_id: string
          category_id: string
        }
        Insert: {
          article_id: string
          category_id: string
        }
        Update: {
          article_id?: string
          category_id?: string
        }
      }
      categories: {
        Row: {
          id: string
          nombre: string
          slug: string
          descripcion: string
        }
        Insert: {
          id?: string
          nombre: string
          slug: string
          descripcion: string
        }
        Update: {
          id?: string
          nombre?: string
          slug?: string
          descripcion?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          nombre: string
          rol: string
        }
        Insert: {
          id?: string
          email: string
          nombre: string
          rol: string
        }
        Update: {
          id?: string
          email?: string
          nombre?: string
          rol?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
