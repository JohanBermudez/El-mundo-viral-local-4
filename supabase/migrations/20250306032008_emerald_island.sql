/*
  # Seed initial data for El Mundo Viral

  1. Categories
    - Create default categories for the news portal
  
  2. Sample Articles
    - Create sample articles with different properties
    - Associate articles with categories
*/

-- Insert categories
INSERT INTO categories (id, nombre, slug, descripcion)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'Política', 'politica', 'Noticias sobre política nacional e internacional'),
  ('00000000-0000-0000-0000-000000000002', 'Economía', 'economia', 'Información sobre economía, finanzas y negocios'),
  ('00000000-0000-0000-0000-000000000003', 'Tecnología', 'tecnologia', 'Las últimas novedades en tecnología, ciencia e innovación'),
  ('00000000-0000-0000-0000-000000000004', 'Deporte', 'deporte', 'Toda la actualidad deportiva nacional e internacional'),
  ('00000000-0000-0000-0000-000000000005', 'Entretenimiento', 'entretenimiento', 'Noticias sobre cine, música, televisión y celebridades'),
  ('00000000-0000-0000-0000-000000000006', 'Salud', 'salud', 'Información y consejos sobre salud y bienestar'),
  ('00000000-0000-0000-0000-000000000007', 'Subsidios', 'subsidios', 'Información sobre subsidios, bonos y beneficios estatales');

-- Insert sample articles
INSERT INTO articles (id, titulo, slug, extracto, contenido, imagen_principal, destacado, trending, viral)
VALUES 
  (
    '00000000-0000-0000-0000-000000000101',
    'El impacto de la inteligencia artificial en el mercado laboral actual',
    'impacto-inteligencia-artificial-mercado-laboral',
    'Un análisis detallado sobre cómo la IA está transformando el mundo del trabajo y qué habilidades serán necesarias en el futuro.',
    'La inteligencia artificial (IA) está transformando rápidamente el panorama laboral global. Según los últimos estudios, se estima que aproximadamente el 85% de los trabajos que existirán en 2030 aún no se han inventado.\n\nLas empresas están adoptando soluciones basadas en IA para automatizar tareas repetitivas, analizar grandes cantidades de datos y optimizar procesos. Esto está generando preocupación sobre el desplazamiento de trabajadores en ciertos sectores, pero también está creando nuevas oportunidades en áreas emergentes.\n\nLos expertos recomiendan enfocarse en desarrollar habilidades que complementen a la IA, como el pensamiento crítico, la creatividad, la inteligencia emocional y la resolución de problemas complejos. Estas "habilidades blandas" serán cada vez más valoradas en un mercado laboral donde las máquinas pueden realizar tareas técnicas con mayor eficiencia.\n\nAdemás, se está produciendo un aumento en la demanda de profesionales especializados en áreas como la ciencia de datos, el aprendizaje automático, la ética de la IA y la interacción humano-máquina. Las instituciones educativas están adaptando sus programas para preparar a los estudiantes para estos nuevos roles.\n\nA pesar de los temores sobre el desempleo tecnológico, la historia muestra que las revoluciones tecnológicas tienden a crear más empleos de los que destruyen a largo plazo. La clave estará en la capacidad de adaptación y el aprendizaje continuo para navegar en este nuevo paisaje laboral.',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    true,
    true,
    false
  ),
  (
    '00000000-0000-0000-0000-000000000102',
    'Los 5 destinos turísticos más económicos para visitar este verano',
    '5-destinos-turisticos-economicos-verano',
    'Te presentamos una selección de destinos que ofrecen experiencias inolvidables sin arruinar tu presupuesto.',
    'Con la llegada del verano, muchos viajeros comienzan a planificar sus vacaciones buscando opciones que combinen experiencias enriquecedoras con precios accesibles. Hemos seleccionado cinco destinos que ofrecen una excelente relación calidad-precio para este verano.\n\n1. Albania: Este país balcánico sigue siendo uno de los secretos mejor guardados de Europa. Con playas cristalinas en la Riviera Albanesa, ciudades históricas como Berat y Gjirokastër, y precios significativamente más bajos que sus vecinos mediterráneos, Albania ofrece una experiencia auténtica a una fracción del costo.\n\n2. Guatemala: Con su rica herencia maya, impresionantes paisajes volcánicos y encantadoras ciudades coloniales como Antigua, Guatemala brinda una inmersión cultural profunda a precios muy económicos. El alojamiento, la comida y el transporte local son notablemente más baratos que en otros destinos latinoamericanos más conocidos.\n\n3. Vietnam: El sureste asiático sigue siendo un paraíso para los viajeros con presupuesto limitado, y Vietnam destaca especialmente. Desde la bulliciosa Hanoi hasta la bahía de Halong, pasando por las playas de Phu Quoc, este país ofrece experiencias diversas con costos muy accesibles para alojamiento y alimentación.\n\n4. Portugal: Para quienes prefieren quedarse en Europa, Portugal continúa siendo una opción más económica que España, Francia o Italia. Lisboa y Oporto ofrecen rica cultura y gastronomía, mientras que el Algarve presenta algunas de las mejores playas del continente, todo a precios más moderados que otros destinos europeos premium.\n\n5. Marruecos: A un corto vuelo desde Europa, Marruecos ofrece una experiencia exótica a precios muy competitivos. Las medinas de Fez y Marrakech, las montañas del Atlas y el desierto del Sahara proporcionan aventuras inolvidables, con opciones de alojamiento y comida para todos los presupuestos.\n\nRecuerda que viajar fuera de temporada alta, utilizar aplicaciones de búsqueda de vuelos económicos y optar por alojamientos locales pueden ayudarte a reducir aún más los costos de tu viaje.',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
    true,
    false,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000103',
    'Nuevo subsidio de vivienda para jóvenes profesionales es anunciado',
    'nuevo-subsidio-vivienda-jovenes-profesionales',
    'El gobierno ha lanzado un programa de subsidios que beneficiará a jóvenes profesionales entre 25 y 35 años para la compra de su primera vivienda.',
    'El Ministerio de Vivienda ha anunciado hoy un nuevo programa de subsidios destinado a facilitar el acceso a la primera vivienda para jóvenes profesionales. Esta iniciativa, denominada "Primer Hogar Joven", busca abordar las dificultades que enfrentan muchos jóvenes para ingresar al mercado inmobiliario debido a los altos precios y requisitos de financiamiento.\n\nEl programa estará dirigido específicamente a ciudadanos entre 25 y 35 años que no hayan sido propietarios de vivienda anteriormente y que puedan demostrar ingresos estables. El subsidio cubrirá hasta un 20% del valor de la propiedad, con un tope máximo de 30 millones de pesos, y se complementará con condiciones preferenciales de financiamiento a través de instituciones bancarias asociadas.\n\n"Estamos conscientes de que la generación joven enfrenta desafíos sin precedentes para acceder a la vivienda propia. Este programa busca ser un puente que les permita dar ese importante paso hacia la independencia financiera y la construcción de patrimonio", declaró la Ministra de Vivienda durante la presentación oficial.\n\nPara acceder al beneficio, los interesados deberán:  \n1. Tener entre 25 y 35 años al momento de la postulación  \n2. No haber sido propietarios de vivienda previamente  \n3. Contar con ahorro equivalente al 5% del valor de la propiedad  \n4. Demostrar ingresos estables durante al menos los últimos 12 meses  \n5. La vivienda a adquirir no debe superar las 2.000 UF\n\nLas postulaciones para este nuevo subsidio se abrirán el próximo mes a través del portal web del Ministerio de Vivienda y se realizarán tres convocatorias anuales con cupos limitados. Se espera que este programa beneficie a aproximadamente 10.000 jóvenes profesionales durante su primer año de implementación.\n\nLos expertos en políticas públicas han recibido positivamente esta iniciativa, aunque señalan que debe ser parte de una estrategia más amplia para abordar los problemas estructurales del mercado de la vivienda, incluyendo el aumento de la oferta y la regulación de precios en zonas de alta demanda.',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    false,
    true,
    false
  ),
  (
    '00000000-0000-0000-0000-000000000104',
    'Las mejores series para maratonear este fin de semana largo',
    'mejores-series-maratonear-fin-semana-largo',
    'Hemos seleccionado las series más adictivas de las principales plataformas de streaming para que aproveches al máximo el fin de semana largo.',
    'El fin de semana largo se aproxima y, para muchos, representa la oportunidad perfecta para ponerse al día con esas series que han estado en la lista de pendientes. Hemos preparado una selección de las producciones más destacadas de las diferentes plataformas, con opciones para todos los gustos.\n\nPara los amantes del drama psicológico, "The Undoing" en HBO Max ofrece una trama envolvente protagonizada por Nicole Kidman y Hugh Grant que se puede completar en un solo día. Sus seis episodios mantienen la tensión hasta el último minuto con un misterio que mantendrá a los espectadores especulando hasta el desenlace.\n\nSi prefieres la ciencia ficción, "Severance" en Apple TV+ ha sido una de las revelaciones del año. Esta distopía corporativa dirigida por Ben Stiller plantea preguntas fascinantes sobre la identidad y el equilibrio trabajo-vida a través de una estética visual única y actuaciones sobresalientes.\n\nPara quienes buscan algo más ligero, "Ted Lasso" continúa siendo la opción ideal en comedia. Esta historia sobre un entrenador estadounidense de fútbol americano que termina dirigiendo un equipo de fútbol en Inglaterra combina humor, corazón y personajes entrañables que te harán sonreír episodio tras episodio.\n\nLos fanáticos del thriller tienen una cita con "The Night Agent" en Netflix, una de las series más vistas de la plataforma este año. Con episodios que terminan en giros inesperados, esta historia sobre un agente del FBI envuelto en una conspiración política garantiza sesiones de "un episodio más" hasta altas horas de la madrugada.\n\nPor último, si buscas algo completamente diferente, "The Bear" en Disney+ ofrece una mirada intensa al mundo de la alta cocina. Protagonizada por Jeremy Allen White, esta serie sobre un chef de élite que regresa a Chicago para dirigir el restaurante familiar combina tensión, humor y momentos emotivos con episodios cortos perfectos para un maratón.\n\nRecuerda preparar los snacks, configurar tu espacio ideal y desconectar las notificaciones para disfrutar de una experiencia inmersiva con cualquiera de estas recomendaciones.',
    'https://images.unsplash.com/photo-1522869635100-187f6605241d',
    false,
    false,
    true
  );

-- Associate articles with categories
INSERT INTO article_categories (article_id, category_id)
VALUES 
  ('00000000-0000-0000-0000-000000000101', '00000000-0000-0000-0000-000000000003'), -- IA article with Technology
  ('00000000-0000-0000-0000-000000000101', '00000000-0000-0000-0000-000000000002'), -- IA article with Economy
  ('00000000-0000-0000-0000-000000000102', '00000000-0000-0000-0000-000000000005'), -- Travel article with Entertainment
  ('00000000-0000-0000-0000-000000000103', '00000000-0000-0000-0000-000000000007'), -- Subsidy article with Subsidies
  ('00000000-0000-0000-0000-000000000103', '00000000-0000-0000-0000-000000000002'), -- Subsidy article with Economy
  ('00000000-0000-0000-0000-000000000104', '00000000-0000-0000-0000-000000000005'); -- Series article with Entertainment
