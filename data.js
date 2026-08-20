const STUDENTS = [
  {
    "id": "209260929",
    "name": "Barquero Ugalde Breydan Emmanuel",
    "group": "10-1"
  },
  {
    "id": "203970820",
    "name": "Bolaños Ramírez Josué",
    "group": "10-1"
  },
  {
    "id": "121010618",
    "name": "Calderon Aburto Dereck David",
    "group": "10-1"
  },
  {
    "id": "209360772",
    "name": "Calderon Salas Carlos Mario",
    "group": "10-1"
  },
  {
    "id": "209340395",
    "name": "Cambronero Vargas Samantha de los Angeles",
    "group": "10-1"
  },
  {
    "id": "209340682",
    "name": "Castillo Murillo Marcelo",
    "group": "10-1"
  },
  {
    "id": "120920649",
    "name": "Castro Cascante Stefanny",
    "group": "10-1"
  },
  {
    "id": "120770919",
    "name": "Cerdas Aburto Sebastian Alberto",
    "group": "10-1"
  },
  {
    "id": "209360773",
    "name": "Cerdas Quesada Sebastián",
    "group": "10-1"
  },
  {
    "id": "209330527",
    "name": "Chavarria Araya Jordan Alonso",
    "group": "10-1"
  },
  {
    "id": "209300689",
    "name": "Cisneros Monge Alison Naomy",
    "group": "10-1"
  },
  {
    "id": "120720267",
    "name": "Gutierrez Pavon Juan Pablo",
    "group": "10-1"
  },
  {
    "id": "209280393",
    "name": "Hernandez Morales Mariana",
    "group": "10-1"
  },
  {
    "id": "402860068",
    "name": "Herrera Garcia Justin Califth",
    "group": "10-1"
  },
  {
    "id": "209210427",
    "name": "Jiménez Arce Eunice Stephanie",
    "group": "10-1"
  },
  {
    "id": "120770697",
    "name": "Meynard Carvajal Ashley",
    "group": "10-1"
  },
  {
    "id": "120930726",
    "name": "Montoya Montero Sofia Vanessa",
    "group": "10-1"
  },
  {
    "id": "209300741",
    "name": "Mora Araya Marco Diego",
    "group": "10-1"
  },
  {
    "id": "209280081",
    "name": "Mora Gonzalez Axel Andres",
    "group": "10-1"
  },
  {
    "id": "209340817",
    "name": "Mora Vargas Maria Fernanda",
    "group": "10-1"
  },
  {
    "id": "209280826",
    "name": "Nuñez Miranda Gabriel Enrique",
    "group": "10-1"
  },
  {
    "id": "209210928",
    "name": "Obando Picado Yeyrel David",
    "group": "10-1"
  },
  {
    "id": "120810820",
    "name": "Oporto Castro Emanuel Matias",
    "group": "10-1"
  },
  {
    "id": "209380001",
    "name": "Perez Gonzalez Jeferson Andres",
    "group": "10-1"
  },
  {
    "id": "120730410",
    "name": "Piedra Salas Jonathan David",
    "group": "10-1"
  },
  {
    "id": "209340810",
    "name": "Rojas Madrigal Luis Alonso",
    "group": "10-1"
  },
  {
    "id": "402870474",
    "name": "Solano Wu Axel Alberto",
    "group": "10-1"
  },
  {
    "id": "120960371",
    "name": "Vargas Xatruch Nathan",
    "group": "10-1"
  },
  {
    "id": "209270297",
    "name": "Vega Arburola Gerald Alberto",
    "group": "10-1"
  },
  {
    "id": "402810973",
    "name": "Aguilar Maltez Pedro Alexander",
    "group": "10-2"
  },
  {
    "id": "209300244",
    "name": "Atencio Gutierrez Daniel Esteban",
    "group": "10-2"
  },
  {
    "id": "209370370",
    "name": "Barrantes Muñoz Lucas Antonio",
    "group": "10-2"
  },
  {
    "id": "209330742",
    "name": "Calderón Segura Matias Johel",
    "group": "10-2"
  },
  {
    "id": "120990187",
    "name": "Castillo Jimenez Joshua Eduardo",
    "group": "10-2"
  },
  {
    "id": "209360219",
    "name": "Castro Urena Briguitte Alejandra",
    "group": "10-2"
  },
  {
    "id": "209260778",
    "name": "Chavarria Matarrita Kiara Noelia",
    "group": "10-2"
  },
  {
    "id": "120840064",
    "name": "Cordoba Araya Yeudy Jesus",
    "group": "10-2"
  },
  {
    "id": "209280832",
    "name": "Corrales Alpizar Maria Valeria",
    "group": "10-2"
  },
  {
    "id": "901300425",
    "name": "Cuadra Oreamuno Alisson Maria",
    "group": "10-2"
  },
  {
    "id": "120990197",
    "name": "Deleon Hidalgo Rebeca",
    "group": "10-2"
  },
  {
    "id": "209270963",
    "name": "Delgado Chavarria Alexia Anyely",
    "group": "10-2"
  },
  {
    "id": "209370291",
    "name": "Delgado Peraza Camila",
    "group": "10-2"
  },
  {
    "id": "121010815",
    "name": "Esquivel Segura Camila",
    "group": "10-2"
  },
  {
    "id": "209280178",
    "name": "Fernandez Herrera Emma Priscilla",
    "group": "10-2"
  },
  {
    "id": "209370077",
    "name": "Fernández Ramírez Jimena de los Ángeles",
    "group": "10-2"
  },
  {
    "id": "120920012",
    "name": "Gonzalez Muñoz Matias Josue",
    "group": "10-2"
  },
  {
    "id": "120940818",
    "name": "Gutierrez Castillo Abdiel Alonso",
    "group": "10-2"
  },
  {
    "id": "209290930",
    "name": "Guzman Jimenez Kiara Daniela",
    "group": "10-2"
  },
  {
    "id": "209310825",
    "name": "Martinez Brenes Reichel Dayan",
    "group": "10-2"
  },
  {
    "id": "209290988",
    "name": "Melendez Arguedas Ashley Geovanna",
    "group": "10-2"
  },
  {
    "id": "120810700",
    "name": "Mendez Ortega Kaycee Annette",
    "group": "10-2"
  },
  {
    "id": "209310051",
    "name": "Murillo Rivera Melany Kate",
    "group": "10-2"
  },
  {
    "id": "209370050",
    "name": "Ramirez Barquero Valery",
    "group": "10-2"
  },
  {
    "id": "120730467",
    "name": "Ramirez Poveda Evan Jaffet",
    "group": "10-2"
  },
  {
    "id": "202563504",
    "name": "Salinas Espinoza Kendry Alexander",
    "group": "10-2"
  },
  {
    "id": "209330040",
    "name": "Segura Morales Gerald Snayder",
    "group": "10-2"
  },
  {
    "id": "209280491",
    "name": "Soto Saenz Cristofer David",
    "group": "10-2"
  },
  {
    "id": "209340255",
    "name": "Trejos Moràn Sharon Suseth",
    "group": "10-2"
  },
  {
    "id": "121000317",
    "name": "Vanegas Mairena Atais Ivanna",
    "group": "10-2"
  },
  {
    "id": "209360684",
    "name": "Arana González Ariana Sofía",
    "group": "10-3"
  },
  {
    "id": "209250873",
    "name": "Arauz Martinez Gipsi del Carmen",
    "group": "10-3"
  },
  {
    "id": "209190522",
    "name": "Blandon Zuñiga Allison",
    "group": "10-3"
  },
  {
    "id": "209360964",
    "name": "Casco Videa Maria Jose",
    "group": "10-3"
  },
  {
    "id": "120960510",
    "name": "Ceas Blanco Elieser David",
    "group": "10-3"
  },
  {
    "id": "504850802",
    "name": "Chavarria Valverde Cristopher Josue",
    "group": "10-3"
  },
  {
    "id": "209350897",
    "name": "Espinoza Olivas Dylan Ramon",
    "group": "10-3"
  },
  {
    "id": "209350759",
    "name": "Fallas Arias Dominick",
    "group": "10-3"
  },
  {
    "id": "209320256",
    "name": "Fargas Cerda Juan Camilo",
    "group": "10-3"
  },
  {
    "id": "209350563",
    "name": "Guillen Guzman Karly Sarath",
    "group": "10-3"
  },
  {
    "id": "209210685",
    "name": "Herrera Castro Paula Abigail",
    "group": "10-3"
  },
  {
    "id": "209190330",
    "name": "Jimenez Blandon Estefan Jair",
    "group": "10-3"
  },
  {
    "id": "209070895",
    "name": "Lopez Acevedo Geyner Antonio",
    "group": "10-3"
  },
  {
    "id": "155852248521",
    "name": "Manzanares Rizo Cristel Dayani",
    "group": "10-3"
  },
  {
    "id": "605120574",
    "name": "Mercado Cruz Ashly Yulieth",
    "group": "10-3"
  },
  {
    "id": "209230943",
    "name": "Miranda Carvajal April Lesachs",
    "group": "10-3"
  },
  {
    "id": "605230581",
    "name": "Montiel Gomez Ileana Valeria",
    "group": "10-3"
  },
  {
    "id": "120560286",
    "name": "Ortega Castrillo Pierre Enrique",
    "group": "10-3"
  },
  {
    "id": "120800296",
    "name": "Oses Castro Luna Yarit",
    "group": "10-3"
  },
  {
    "id": "209190242",
    "name": "Pichardo Sequeira Keylor",
    "group": "10-3"
  },
  {
    "id": "209190164",
    "name": "Ponce López Daniela",
    "group": "10-3"
  },
  {
    "id": "209300063",
    "name": "Porras Quesada Justin",
    "group": "10-3"
  },
  {
    "id": "155825113708",
    "name": "Reyes Aguilera Aylin Nayeli",
    "group": "10-3"
  },
  {
    "id": "209100453",
    "name": "Reyes Potoy Valeria Paola",
    "group": "10-3"
  },
  {
    "id": "155841572113",
    "name": "Rivas . Maria del Carmen",
    "group": "10-3"
  },
  {
    "id": "504910662",
    "name": "Roque Moncada Shirlen Franchesca",
    "group": "10-3"
  },
  {
    "id": "205130914",
    "name": "Salazar Córdoba Steven",
    "group": "10-3"
  },
  {
    "id": "209370036",
    "name": "Segura Barahona Arelys Jazmin",
    "group": "10-3"
  },
  {
    "id": "209310034",
    "name": "Segura Gonzalez Noel Segura González",
    "group": "10-3"
  },
  {
    "id": "209330773",
    "name": "Torres Flores Justin Samuel",
    "group": "10-3"
  },
  {
    "id": "209290830",
    "name": "Vargas Arce Zayira Nileyk",
    "group": "10-3"
  },
  {
    "id": "120700659",
    "name": "Zapata Chaves Nicole",
    "group": "10-3"
  },
  {
    "id": "209380284",
    "name": "Zuñiga Obando Hazel Dayana",
    "group": "10-3"
  },
  {
    "id": "202204329",
    "name": "Barrios Castillo Jacqueline",
    "group": "10-4"
  },
  {
    "id": "209340335",
    "name": "Carrillo Chavez Mathias Josapat",
    "group": "10-4"
  },
  {
    "id": "120770970",
    "name": "Carrillo Rivera Jimena Marie",
    "group": "10-4"
  },
  {
    "id": "120870657",
    "name": "Castillo Martinez Juan Antonio",
    "group": "10-4"
  },
  {
    "id": "120860291",
    "name": "Centeno Chavez Heiner Johan",
    "group": "10-4"
  },
  {
    "id": "155827346201",
    "name": "Cerda Luna Genesis Alice",
    "group": "10-4"
  },
  {
    "id": "209380132",
    "name": "Chaves Castro Devany Mackenzie",
    "group": "10-4"
  },
  {
    "id": "209120839",
    "name": "Chávez Alfaro Michaell Jafeth",
    "group": "10-4"
  },
  {
    "id": "209110640",
    "name": "Flores Venegas Jimena de los Angeles",
    "group": "10-4"
  },
  {
    "id": "120730212",
    "name": "Fonseca Mora Sofia Alejandra",
    "group": "10-4"
  },
  {
    "id": "120720528",
    "name": "Garcia Pineda Matias Alberto",
    "group": "10-4"
  },
  {
    "id": "209350641",
    "name": "Gomez Mena Brithany Naomy",
    "group": "10-4"
  },
  {
    "id": "209320612",
    "name": "Granado Herrera Omar Jose",
    "group": "10-4"
  },
  {
    "id": "208980547",
    "name": "Guevara Valles Kiara Daniela",
    "group": "10-4"
  },
  {
    "id": "209300735",
    "name": "Guillen Martinez Nataly Yuliana",
    "group": "10-4"
  },
  {
    "id": "209340904",
    "name": "Hernandez Arauz Ana Yancy",
    "group": "10-4"
  },
  {
    "id": "209290048",
    "name": "Laguna Urrutia Yor Henry",
    "group": "10-4"
  },
  {
    "id": "209350611",
    "name": "Lepiz Garcia Valentina",
    "group": "10-4"
  },
  {
    "id": "208980027",
    "name": "Martinez Quiñonez Esteban Josue",
    "group": "10-4"
  },
  {
    "id": "155840575329",
    "name": "Mercado Jarquin Greg Jareck",
    "group": "10-4"
  },
  {
    "id": "402880471",
    "name": "Mora Perez Karla Marisela",
    "group": "10-4"
  },
  {
    "id": "209260227",
    "name": "Murillo Hernandez Jefferson Jesus",
    "group": "10-4"
  },
  {
    "id": "209170598",
    "name": "Obando Dinarte Britany Francela",
    "group": "10-4"
  },
  {
    "id": "120580587",
    "name": "Padilla Vaglio Valentina Maria",
    "group": "10-4"
  },
  {
    "id": "209220539",
    "name": "Paz Rivera Jordan Ernesto",
    "group": "10-4"
  },
  {
    "id": "121000714",
    "name": "Pena Morales Samira Maria",
    "group": "10-4"
  },
  {
    "id": "209000011",
    "name": "Reyes Pérez Jared",
    "group": "10-4"
  },
  {
    "id": "209280812",
    "name": "Rodriguez Calderon Abigail",
    "group": "10-4"
  },
  {
    "id": "155836926132",
    "name": "Ruiz Luis Fernando",
    "group": "10-4"
  },
  {
    "id": "209270006",
    "name": "Ryan Castro Keila Francini",
    "group": "10-4"
  },
  {
    "id": "305880341",
    "name": "Vasquez Arroliga Dainer Sebastian",
    "group": "10-4"
  },
  {
    "id": "109690259",
    "name": "Vega Corella Isaac Sebastian",
    "group": "10-4"
  },
  {
    "id": "209370161",
    "name": "Venegas Gutierrez Josepth David",
    "group": "10-4"
  },
  {
    "id": "1205409948",
    "name": "Villalobos Diaz Maikel Steven",
    "group": "10-4"
  },
  {
    "id": "209180215",
    "name": "Acosta Espinoza Justin",
    "group": "10-5"
  },
  {
    "id": "120690071",
    "name": "Alvarez Sandoval Laura Yaneth",
    "group": "10-5"
  },
  {
    "id": "209220876",
    "name": "Araya Perez Randy Antonio",
    "group": "10-5"
  },
  {
    "id": "605150703",
    "name": "Arroyo Arias Jose Luis",
    "group": "10-5"
  },
  {
    "id": "209350415",
    "name": "Avila Hernandez Dorothy",
    "group": "10-5"
  },
  {
    "id": "209250891",
    "name": "Brenes Martinez Yorleny",
    "group": "10-5"
  },
  {
    "id": "120780254",
    "name": "Brenes Rojas Santiago Jose",
    "group": "10-5"
  },
  {
    "id": "120800243",
    "name": "Camareno Castillo Kenian Jafet",
    "group": "10-5"
  },
  {
    "id": "209350678",
    "name": "Castillo Gallo Lucas Orlando",
    "group": "10-5"
  },
  {
    "id": "209370727",
    "name": "Cubero Cambronero Maria Fernanda",
    "group": "10-5"
  },
  {
    "id": "209130513",
    "name": "Espinoza Morales Daniela Michelle",
    "group": "10-5"
  },
  {
    "id": "209230193",
    "name": "Fajardo Meza Adriel",
    "group": "10-5"
  },
  {
    "id": "209250600",
    "name": "Garcia Morales Madelyn",
    "group": "10-5"
  },
  {
    "id": "209320246",
    "name": "Granera Fuentes Brithany Camila",
    "group": "10-5"
  },
  {
    "id": "209290047",
    "name": "Hernandez Solis Maria Angellina",
    "group": "10-5"
  },
  {
    "id": "186201859021",
    "name": "Jimene Barreno Geremi Alejandro",
    "group": "10-5"
  },
  {
    "id": "209370535",
    "name": "Martinez Pulido Keilyn Daniela",
    "group": "10-5"
  },
  {
    "id": "209130038",
    "name": "Medrano Cruz Allan Steven",
    "group": "10-5"
  },
  {
    "id": "209270786",
    "name": "Miranda Solano Bryan Jafeth",
    "group": "10-5"
  },
  {
    "id": "209340963",
    "name": "Muñoz Muñoz Keisy Jimena",
    "group": "10-5"
  },
  {
    "id": "209230070",
    "name": "Obando Reyes Brandon Yuren",
    "group": "10-5"
  },
  {
    "id": "209160531",
    "name": "Perez Rojas Abigail",
    "group": "10-5"
  },
  {
    "id": "209320952",
    "name": "Perez Soto Angelica Saray",
    "group": "10-5"
  },
  {
    "id": "209320945",
    "name": "Perez Valdivia Jorhsua Israel",
    "group": "10-5"
  },
  {
    "id": "209190369",
    "name": "Quiros Navarro Isaac Josue",
    "group": "10-5"
  },
  {
    "id": "209320885",
    "name": "Rayo Mena Naomy Nicole",
    "group": "10-5"
  },
  {
    "id": "504820778",
    "name": "Ruiz Lopez Adrian",
    "group": "10-5"
  },
  {
    "id": "209320891",
    "name": "Sandigo Carrillo Juan Jose",
    "group": "10-5"
  },
  {
    "id": "209210309",
    "name": "Soto Martinez Breyner Mathias",
    "group": "10-5"
  },
  {
    "id": "209350293",
    "name": "Soza Saballos Tirsa Sofia",
    "group": "10-5"
  },
  {
    "id": "170570677",
    "name": "Uriarte Ulloa Ramiro Mauricio",
    "group": "10-5"
  },
  {
    "id": "120880889",
    "name": "Varela Fernandez Valeria Maria",
    "group": "10-5"
  },
  {
    "id": "605190601",
    "name": "Vega Gutierrez Brandon Alberto",
    "group": "10-5"
  },
  {
    "id": "120500991",
    "name": "Venegas Fernandez Jean Carlos",
    "group": "10-5"
  },
  {
    "id": "202677211",
    "name": "Andino Meza Denia Leonora",
    "group": "10-6"
  },
  {
    "id": "209250592",
    "name": "Arrieta Ureña Liamlee Naomy",
    "group": "10-6"
  },
  {
    "id": "209270501",
    "name": "Benedict Tellez Ashly Solanlly",
    "group": "10-6"
  },
  {
    "id": "209080731",
    "name": "Briones Jimenez Daniela",
    "group": "10-6"
  },
  {
    "id": "120510422",
    "name": "Cano Caballero Emily Tatiana",
    "group": "10-6"
  },
  {
    "id": "209370651",
    "name": "Castrillo Obregón Santiago",
    "group": "10-6"
  },
  {
    "id": "209360992",
    "name": "Centeno Rayo Dylan",
    "group": "10-6"
  },
  {
    "id": "208960266",
    "name": "Centeno Reyes Moises",
    "group": "10-6"
  },
  {
    "id": "209270802",
    "name": "Chacon Sanchez Samuel",
    "group": "10-6"
  },
  {
    "id": "402860021",
    "name": "Espinoza Alvarado Kristel Sofia",
    "group": "10-6"
  },
  {
    "id": "209330077",
    "name": "Espinoza Barrantes Cristel Naomy",
    "group": "10-6"
  },
  {
    "id": "209550336",
    "name": "Gonzalez Soto Tammy Valeria",
    "group": "10-6"
  },
  {
    "id": "209000342",
    "name": "Guerrero Rivera Juliana Jureisy",
    "group": "10-6"
  },
  {
    "id": "155855030536",
    "name": "Guzmán Mendoza Ashley Michell",
    "group": "10-6"
  },
  {
    "id": "209300341",
    "name": "Jimenez Zumbado Adrian Josue",
    "group": "10-6"
  },
  {
    "id": "120820177",
    "name": "Loría Kaen Ian",
    "group": "10-6"
  },
  {
    "id": "209380283",
    "name": "Marin Soto Matias Mauricio",
    "group": "10-6"
  },
  {
    "id": "209290294",
    "name": "Matamoros Jaime Mariam",
    "group": "10-6"
  },
  {
    "id": "209320148",
    "name": "Monge Fernandez Amber Valezka",
    "group": "10-6"
  },
  {
    "id": "402890745",
    "name": "Montero Anchia Tamara",
    "group": "10-6"
  },
  {
    "id": "209340083",
    "name": "Perez Gonzalez Denzel Manuel",
    "group": "10-6"
  },
  {
    "id": "209380506",
    "name": "Perez Gutierrez Aileen Monserrat",
    "group": "10-6"
  },
  {
    "id": "202674814",
    "name": "Pérez Moleon José Alberto",
    "group": "10-6"
  },
  {
    "id": "209240512",
    "name": "Perez Sancho Keisi Dailyn",
    "group": "10-6"
  },
  {
    "id": "209200119",
    "name": "Pilarte Torres Olman Andrey",
    "group": "10-6"
  },
  {
    "id": "155851136722",
    "name": "Reyes Hernandez Milton Josue",
    "group": "10-6"
  },
  {
    "id": "120880928",
    "name": "Rojas Chaves Fabian",
    "group": "10-6"
  },
  {
    "id": "120450161",
    "name": "Sequeira Alfaro Jason Gabriel",
    "group": "10-6"
  },
  {
    "id": "120760036",
    "name": "Somarriba Fletes Janny Michelle",
    "group": "10-6"
  },
  {
    "id": "209270809",
    "name": "Soto Fallas Valentina de los Angeles",
    "group": "10-6"
  },
  {
    "id": "209230063",
    "name": "Torrez Cano Jostin Jesus",
    "group": "10-6"
  },
  {
    "id": "402880613",
    "name": "Vargas Perez Keyth Vanessa",
    "group": "10-6"
  },
  {
    "id": "209320094",
    "name": "Vargas Samudio Valeria",
    "group": "10-6"
  },
  {
    "id": "209280171",
    "name": "Venegas Rios Krystal Yariela",
    "group": "10-6"
  },
  {
    "id": "209200079",
    "name": "Abrego Fernández Moisés",
    "group": "10-7"
  },
  {
    "id": "209220233",
    "name": "Arguedas Martinez Jukary",
    "group": "10-7"
  },
  {
    "id": "209140277",
    "name": "Arguedas Silva Evony Valeria",
    "group": "10-7"
  },
  {
    "id": "305900854",
    "name": "Barquero Torres Arieth Noelia",
    "group": "10-7"
  },
  {
    "id": "209140102",
    "name": "Blandon Reyes Ingrid",
    "group": "10-7"
  },
  {
    "id": "402850606",
    "name": "Caballero Altamirano Genesis Yunieth",
    "group": "10-7"
  },
  {
    "id": "209260876",
    "name": "Cambronero Bonilla Ashly Lidiette",
    "group": "10-7"
  },
  {
    "id": "155842531636",
    "name": "Carrero Tellez Yasaric de los Ángeles",
    "group": "10-7"
  },
  {
    "id": "120290868",
    "name": "Cedeño Rojas Sharon",
    "group": "10-7"
  },
  {
    "id": "120750331",
    "name": "Chaves Lopez Francini Valeska",
    "group": "10-7"
  },
  {
    "id": "209300202",
    "name": "Cruz Obando Gabriel Eladio",
    "group": "10-7"
  },
  {
    "id": "209360414",
    "name": "Dormes Ruiz María Celeste",
    "group": "10-7"
  },
  {
    "id": "120820763",
    "name": "García Medina José Ángel",
    "group": "10-7"
  },
  {
    "id": "209320547",
    "name": "Gazo Rivera Kenneth Joshua",
    "group": "10-7"
  },
  {
    "id": "402800496",
    "name": "Guerrero Rodriguez Anthony Josue",
    "group": "10-7"
  },
  {
    "id": "120680260",
    "name": "Guzman Guido Ingrid Carolina",
    "group": "10-7"
  },
  {
    "id": "209380219",
    "name": "Jimenez Madrigal Edgar Ian",
    "group": "10-7"
  },
  {
    "id": "209310397",
    "name": "Lara Arrieta Jacob Jared",
    "group": "10-7"
  },
  {
    "id": "209180792",
    "name": "Lopez Guerrero Jose Manuel",
    "group": "10-7"
  },
  {
    "id": "202207135",
    "name": "Marin Castaño Santiago",
    "group": "10-7"
  },
  {
    "id": "901420473",
    "name": "Martinez Brenes Luis Gabriel",
    "group": "10-7"
  },
  {
    "id": "209160392",
    "name": "Matarrita Esperanza Rachel",
    "group": "10-7"
  },
  {
    "id": "209070642",
    "name": "Molina Lopez Emil Arcangel",
    "group": "10-7"
  },
  {
    "id": "209010944",
    "name": "Monge Araya Joshua David",
    "group": "10-7"
  },
  {
    "id": "209220776",
    "name": "Mongrio Gonzales Johan Samuel",
    "group": "10-7"
  },
  {
    "id": "120920485",
    "name": "Morán Martinez Mariam Sofia",
    "group": "10-7"
  },
  {
    "id": "202561503",
    "name": "Moreno Pavon Ana Lucia",
    "group": "10-7"
  },
  {
    "id": "209300137",
    "name": "Ramirez Espinoza Mileydi Yulissa",
    "group": "10-7"
  },
  {
    "id": "186202904330",
    "name": "Ramírez García Gabriel Enrique",
    "group": "10-7"
  },
  {
    "id": "155844569334",
    "name": "Romeo Lopez Anthony",
    "group": "10-7"
  },
  {
    "id": "209170362",
    "name": "Soto Ayala Byron Bernal",
    "group": "10-7"
  },
  {
    "id": "120750098",
    "name": "Soto Ortega Angely Daniela",
    "group": "10-7"
  },
  {
    "id": "209230366",
    "name": "Varela Ruiz Jeanneth de los Angeles",
    "group": "10-7"
  },
  {
    "id": "120380586",
    "name": "Vega Gomez Daniela Danuskia",
    "group": "10-7"
  },
  {
    "id": "209330507",
    "name": "Venegas Jimenez Aaron Josue",
    "group": "10-7"
  },
  {
    "id": "504870618",
    "name": "Villalobos Gómez Aarón David",
    "group": "10-7"
  }
];
