<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/Css/formulario.css">
    <link rel="stylesheet" href="/assets/Css/styles.css">
    <link rel="stylesheet" href="/assets/Css/menubtn.css">
    <link rel="icon" href="/assets/favicon.png">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,100;1,400&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&display=swap" rel="stylesheet">

    <title>Jano Martino</title>
</head>

<body>

    <div class="loader"></div>

    <div id="root" class="blur">

        <header class="header">
            <nav class="header--menu">
                <a href="#home">Jano Martino</a>
                <div class="header--menu-div-container">
                    <a href="#sobreMi">Sobre Mi</a>
                    <a href="#educacionCursos">Educacion/Cursos</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </nav>

            <button class="header--btnMenu hamburger hamburger--3dx"> <span class="header--btnMenu hamburger-box">
                    <span class="header--btnMenu hamburger-inner"></span>
                </span></button>

            <a class="scrollTop hidden">
                <div class='arrow-5'></div>
            </a>
        </header>

        <main class="main" id="home">
            <section class="home">
                <img class="home--picture" src="/assets/perfil.jpg" alt="Foto de Perfil" />
                <div class="home--title-container">
                    <h1 class="home--title-h1" data-aos="zoom-in">Mi nombre es Jano Martino</h1>
                    <h2 class="home--title-h2" data-aos="zoom-in">Y soy FrontEnd Developer</h2>
                </div>
                <div class="home--icons-container">
                    <a href="https://github.com/JanoM2" target="_blank" class="home--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-git-hub" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/janomartino/" target="_blank" class="home--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                </div>

                <a class="home--btnDownload" href="/assets/Jano Martino - FrontEnd Dev en.pdf"
                    download="Jano Martino - FrontEnd Dev">Descargar Cv</a>
            </section>

            <section class="sobreMi" id="sobreMi">
                <hr>
                <h1 class="sobreMi--title">Sobre Mi</h1>
                <article class="sobreMi--article">
                    <ul class="sobreMi--ul">
                        <li class="sobreMi--li" data-aos="fade-right">Hola Mundo, soy <b>Jano</b>, tengo mas de 20 años y soy
                            <b>Desarrollador FrontEnd Autodidacta</b>. Soy una persona <b>proactiva</b>, <b>organizada y
                                responsable</b>, con buenas relaciones interpersonales. Cuento con muchísimas ganas de
                            <b>continuar</b> desarrollando mis habilidades como programador para algun dia convertime en <b>Full Stack Developer</b>.
                        </li>
                        <li class="sobreMi--li" data-aos="fade-left"><b>Me encanta programar</b> y la manera en que con
                            un
                            poco de código se puede <b>hacer de todo</b>, desde hacer un diseño bonito hasta crear algo
                            totalmente dinámico e interactivo con el usuario.</li>
                        <li class="sobreMi--li" data-aos="fade-right">También me gustan mucho los <b>deportes</b> y mi
                            Favorito es el <b>Básquet</b>.</li>
                        <li class="sobreMi--li" data-aos="fade-left">Además disfruto mucho de ver <b>películas</b> y las
                            que
                            más me gustan son las del genero de <b>terror y drama</b>.</li>
                    </ul>
                </article>
            </section>

            <section id="educacionCursos" class="eduCursos">
                <hr>

                <h1 class="eduCursos--title">Educacion/Cursos</h1>

                <article class="eduCursos--article-cursos" data-aos="fade-up">
                    <div class="eduCursos--cards">
                        <a href=" https://aprendejavascript.org/" target="_blank">
                            <img class="eduCursos-img" src="https://jonmircha.com/img/kEnAi.svg" alt="Jon Mircha"></img>
                        </a>
                        <h3 class="eduCursos-h3">Jon Mircha</h3>
                        <a class="eduCursos-fuente" href="https://aprendejavascript.org/" target="_blank">Ver Más</a>
                    </div>

                    <div class="eduCursos--cards">
                        <a href="https://platzi.com/" target="_blank">
                            <img class="eduCursos-img" src="https://static.platzi.com/media/platzi-isotipo@2x.png"
                                alt="Platzi"></img>
                        </a>
                        <h3 class="eduCursos-h3">Platzi</h3>
                        <a class="eduCursos-fuente" href="https://platzi.com/" target="_blank">Ver Más</a>
                    </div>

                    <div class="eduCursos--cards">
                        <a href="https://www.freecodecamp.org/" target="_blank">
                            <img class="eduCursos-img"
                                src="https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU"
                                alt="FreeCodeCamp"></img>
                        </a>
                        <h3 class="eduCursos-h3">FreeCodeCamp</h3>
                        <a class="eduCursos-fuente" href="https://www.freecodecamp.org/" target="_blank">Ver Más</a>
                    </div>

                    <div class="eduCursos--cards">
                        <a href="https://carlosazaustre.es/" target="_blank">
                            <img class="eduCursos-img"
                                src="https://public-tidycal.s3.us-west-2.amazonaws.com/profile_pictures/pvKjF5f86PON6toPrGLDvOz8N0Qo6IqAvsFCAKCP.png"
                                alt="Carlos Azaustre"></img>
                        </a>
                        <h3 class="eduCursos-h3">Carlos Azaustre</h3>
                        <a class="eduCursos-fuente" href="https://carlosazaustre.es/" target="_blank">Ver Más</a>
                    </div>

                    <div class="eduCursos--cards">
                        <a href="https://midu.dev/" target="_blank">
                            <img class="eduCursos-img" src="https://midu.dev/logo.png" alt="MiduDev"></img>
                        </a>
                        <h3 class="eduCursos-h3">MiduDev</h3>
                        <a class="eduCursos-fuente" href="https://midu.dev/" target="_blank">Ver Más</a>
                    </div>

                    <div class="eduCursos--cards">
                        <a href="https://www.youtube.com/c/soydalto" target="_blank">
                            <img class="eduCursos-img"
                                src="https://yt3.ggpht.com/jHpWdf9qWNdrCjxfQxCxR0aiYY9Y1IO7s6Jwlk-OgKxS8nzjEMffakE6mdOdp2u22R3130U0nQ=s88-c-k-c0x00ffffff-no-rj"
                                alt="Soy Dalto"></img>
                        </a>
                        <h3 class="eduCursos-h3">Soy Dalto</h3>
                        <a class="eduCursos-fuente" href="https://www.youtube.com/c/soydalto" target="_blank">Ver
                            Más</a>
                    </div>

                    <div class="eduCursos--cards">
                        <a href="https://www.futurelearn.com/" target="_blank">
                            <img class="eduCursos-img"
                                src="https://assets.bizclikmedia.net/1800/843a95c16430093c85ffe702599b6280:eb2d29ce1e13fb34cceebd9cb53b4aa7/951af173-d392-45ec-b5e7-548687b8c070.png"
                                alt="Future Learn"></img>
                        </a>
                        <h3 class="eduCursos-h3">Future Learn</h3>
                        <a class="eduCursos-fuente" href="https://www.futurelearn.com/" target="_blank">Ver Más</a>
                    </div>

                    <div class="eduCursos--cards">
                        <a href="https://www.efset.org/" target="_blank">
                            <img class="eduCursos-img"
                                src="//a.storyblok.com/f/71234/103x24/da9ab91cbd/efset-logo_black.svg"
                                alt=" EFSET"></img>
                        </a>
                        <h3 class="eduCursos-h3">EFSET</h3>
                        <a class="eduCursos-fuente" href="https://www.efset.org/" target="_blank">Ver Más</a>
                    </div>
                </article>
                <article class="eduCursos--article-certificados">

                    <h1 class="eduCursos--title">Certificados</h1>

                    <div class="eduCursos--carousel">

                        <figure class="eduCursos--certified  activado">
                            <img class="eduCursos--certified-img" src="/assets/certified/certified 1.png"
                                alt="certified">
                            <a target="_blank"
                                href="https://www.freecodecamp.org/certification/Jano_Martino/javascript-algorithms-and-data-structures">Enlace
                                al Certificado</a>
                        </figure>
                        <figure class="eduCursos--certified ">
                            <img class="eduCursos--certified-img" src="/assets/certified/certified 2.png"
                                alt="certified">
                            <a target="_blank"
                                href="https://drive.google.com/file/d/1DmIml9twB8KwPUHEr7BHgUzG-l-yLRDX/view">Enlace al
                                Certificado</a>
                        </figure>
                        <figure class="eduCursos--certified ">
                            <img class="eduCursos--certified-img" src="/assets/certified/certified 3.png"
                                alt="certified">
                            <a target="_blank"
                                href="https://drive.google.com/file/d/1KAG0kVZZk0KvTlnWuS3g-l8o5vi4K9jA/view">Enlace al
                                Certificado</a>
                        </figure>
                        <figure class="eduCursos--certified ">
                            <img class="eduCursos--certified-img" src="/assets/certified/certified 4.png"
                                alt="certified">
                            <a target="_blank"
                                href="https://drive.google.com/file/d/1nSRPDILrsIFm9_JJTyq6lRyIobOPACMZ/view">Enlace al
                                Certificado</a>
                        </figure>
                        <figure class="eduCursos--certified ">
                            <img class="eduCursos--certified-img" src="/assets/certified/certified 5.png"
                                alt="certified">
                            <a target="_blank" href="https://www.efset.org/cert/aG7wp5">Enlace al Certificado</a>
                        </figure>
                        <figure class="eduCursos--certified ">
                            <img class="eduCursos--certified-img" src="/assets/certified/certified 6.png"
                                alt="certified">
                            <a target="_blank" href="https://www.futurelearn.com/certificates/gj5n72d">Enlace al
                                Certificado</a>
                        </figure>
                        <figure class="eduCursos--certified ">
                            <img class="eduCursos--certified-img" src="/assets/certified/certified 7.png"
                                alt="certified">
                            <a target="_blank" href="https://www.futurelearn.com/certificates/kmqgugg">Enlace al
                                Certificado</a>
                        </figure>

                    </div>

                    <button class="prev" disabled>&#10094;</button>
                    <button class="next">&#10095;</button>
                </article>
                <article class="eduCursos--article-skills">
                    <h1 class="eduCursos--title">Skills</h1>
                    <div class="eduCursos--icons-container">
                        <span class="eduCursos--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144px" height="144px">
                                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                                <path fill="#FFF"
                                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" />
                                <path fill="#EEE"
                                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" />
                            </svg>
                        </span>
                        <span class="eduCursos--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144px" height="144px">
                                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                                <path fill="#FFF"
                                    d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" />
                                <path fill="#EEE"
                                    d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" />
                            </svg>
                        </span>
                        <span class="eduCursos--icon">
                            <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title>file_type_tailwind</title>
                                <path
                                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                                    style="fill:#44a8b3" />
                            </svg>
                        </span>
                        <span class="eduCursos--icon">
                            <div class="eduCursos--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                    <circle cx="24" cy="24" r="20" fill="#4db6ac" />
                                    <path fill="#fff"
                                        d="M33.357,21.5h-8.882c-0.187,0-0.308-0.198-0.222-0.365l5.03-9.745	c0.13-0.253-0.195-0.492-0.398-0.293l-14.2,13.974c-0.159,0.157-0.048,0.428,0.175,0.428H24.2c0.202,0,0.32,0.227,0.205,0.393	l-7.126,10.265c-0.17,0.245,0.154,0.528,0.374,0.327l15.873-14.55C33.694,21.78,33.585,21.5,33.357,21.5z" />
                                </svg>
                            </div>
                        </span>
                        <span class="eduCursos--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144px" height="144px"
                                baseProfile="basic">
                                <path fill="#f7df1e" d="M6,42V6h36v36H6z" />
                                <path fill="#000001"
                                    d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z" />
                            </svg>
                        </span>
                        <span class="eduCursos--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
                                viewBox="0 0 48 48" style=" fill:#000000;">
                                <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8">
                                </polygon>
                                <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8">
                                </polygon>
                            </svg>
                        </span>
                        <span class="eduCursos--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144px" height="144px">
                                <path fill="#F4511E"
                                    d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z" />
                            </svg>
                        </span>
                        <span class="eduCursos--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="90px" height="90px"
                                fill="#ffff">
                                <path
                                    d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                            </svg>
                        </span>
                    </div>
                </article>
            </section>

            <section class="proyectos" id="proyectos">
                <hr>

                <h1 class="proyectos--title">Proyectos</h1>

                <article class="proyectos--article">
                    <div class="proyectos--cards" data-aos="flip-up">
                        <a href="https://dom-exercises.000webhostapp.com/" target="_blank">
                            <img class="proyectos-img" src="/assets/proyects/dom.png" alt="DOM-Exercises"></img>
                        </a>
                        <h3 class="proyectos-h3">DOM-Exercises</h3>
                        <a class="proyectos-fuente" href="https://dom-exercises.000webhostapp.com/" target="_blank">Ver
                            Más</a>
                    </div>

                    <div class="proyectos--cards" data-aos="flip-up">
                        <a href="https://codepen.io/janom2/pen/XWELWrN" target="_blank">
                            <img class="proyectos-img" src="/assets/proyects/pokemon.png" alt="Pokemon"></img>
                        </a>
                        <h3 class="proyectos-h3">Pokemon</h3>
                        <a class="proyectos-fuente" href="https://codepen.io/janom2/pen/XWELWrN" target="_blank">Ver
                            Más</a>
                    </div>

                    <div class="proyectos--cards" data-aos="flip-up">
                        <a href="https://codepen.io/janom2/pen/JjLQPzN" target="_blank">
                            <img class="proyectos-img" src="/assets/proyects/tvshow.png" alt="TV Show"></img>
                        </a>
                        <h3 class="proyectos-h3">TV Show</h3>
                        <a class="proyectos-fuente" href="https://codepen.io/janom2/pen/JjLQPzN" target="_blank">Ver
                            Más</a>
                    </div>

                    <div class="proyectos--cards" data-aos="flip-up">
                        <a href="https://codepen.io/janom2/pen/gOeNOYQ" target="_blank">
                            <img class="proyectos-img" src="/assets/proyects/wordpress api.png"
                                alt="WordPress API"></img>
                        </a>
                        <h3 class="proyectos-h3">WordPress API</h3>
                        <a class="proyectos-fuente" href="https://codepen.io/janom2/pen/gOeNOYQ" target="_blank">Ver
                            Más</a>
                    </div>

                    <div class="proyectos--cards" data-aos="flip-up">
                        <a href="https://codepen.io/janom2/pen/OJvKJrK" target="_blank">
                            <img class="proyectos-img" src="/assets/proyects/ig.png" alt="Instagram Design"></img>
                        </a>
                        <h3 class="proyectos-h3">Instagram Design</h3>
                        <a class="proyectos-fuente" href="https://codepen.io/janom2/pen/OJvKJrK" target="_blank">Ver
                            Más</a>
                    </div>

                    <div class="proyectos--cards" data-aos="flip-up">
                        <a href="https://game-whos-that-pokemon.netlify.app/" target="_blank">
                            <img class="proyectos-img" src="/assets/proyects/guess pokemon.png"
                                alt="Who's That Pokemon?"></img>
                        </a>
                        <h3 class="proyectos-h3">Who's That Pokemon?</h3>
                        <a class="proyectos-fuente" href="https://game-whos-that-pokemon.netlify.app/"
                            target="_blank">Ver Más</a>
                    </div>

                </article>
            </section>

            <section class="contacto" id="contacto">
                <hr>

                <h1 class="contacto--tile">Contacto</h1>

                <article class="contacto--article">
                    <form class="contact-form">
                        <input name="name" class="name" type="text" placeholder="Escribe tu Nombre"
                            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
                            title="Nombre solo acepta letras y espacios en blanco" required data-form
                            autocomplete="off">

                        <input name="email" class="email" type="email" placeholder="Escribe tu email"
                            title="Email incorrecto"
                            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required=""
                            data-form="" autocomplete="off">

                        <input name="subject" class="subject" type="text" placeholder="Asunto a Tratar"
                            title="Campo sin rellenar" required data-form autocomplete="off">

                        <textarea name="comment" class="textarea" placeholder="Escribe tus comentarios" rows="5"
                            title="Tu comentario no puede superar los 255 caracteres" data-pattern="^.{1,255}$" required
                            data-form autocomplete="off"></textarea>

                        <button class="contactBtn" type="submit">Enviar</button>

                        <div class="ldr none"></div>

                        <div class="contact-form-response none">
                            <p>Los datos han sido enviados</p>
                        </div>
                    </form>

                    <div class="contacto--container">
                        <a class="contacto--mail-container" href="mailto:martinojano0@gmail.com">
                            <span class="contacto--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-at" viewBox="0 0 16 16">
                                    <path
                                        d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                                    </path>
                                </svg>
                            </span>
                            <p>martinojano0@gmail.com</p>
                        </a>

                        <div class="contacto--ubicacion-container">
                            <span class="contacto--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z">
                                    </path>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
                                    </path>
                                </svg>
                            </span>
                            <p>Buenos Aires, Argetina</p>
                        </div>

                        <div class="contacto--icons-container">
                            <a href="https://github.com/JanoM2" target="_blank" class="contacto--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-git-hub" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                    </path>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/janomartino/" target="_blank" class="contacto--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </article>

            </section>

        </main>

        <footer class="footer">
            <hr>
            <p>Hecho con ♥ por Jano Martino</p>
        </footer>

    </div>

    <script src="/Js/index.js" type="module"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="/Js/Helpers/aos.js"></script>
</body>

</html>
