-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-04-2022 a las 18:39:03
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `id_carrera` varchar(250) NOT NULL,
  `carrera` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carreras`
--

INSERT INTO `carreras` (`id_carrera`, `carrera`) VALUES
('ELEC555', 'ING Electrica'),
('MECN444', 'ING Mecanica'),
('SITM333', 'ING de Sistemas'),
('TELC777', 'ING en Telecomunicaciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `data_horarios`
--

CREATE TABLE `data_horarios` (
  `id_registro` int(7) NOT NULL,
  `id_profesor` varchar(50) NOT NULL,
  `id_materia` varchar(50) NOT NULL,
  `cod_dia` varchar(50) NOT NULL,
  `turno_horario` varchar(50) NOT NULL,
  `semestre_horario` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `data_horarios`
--

INSERT INTO `data_horarios` (`id_registro`, `id_profesor`, `id_materia`, `cod_dia`, `turno_horario`, `semestre_horario`) VALUES
(1, 'V10234543', 'MAT-21215', 'l-700-745', 'diurno', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `id_Historia` int(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `accion` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`id_Historia`, `id_user`, `accion`, `fecha`, `hora`) VALUES
(2, 17, 'Añadio un nuevo horario del 3 de ING de Sistemas del Diurno', '2022-03-21', '20:02:11'),
(3, 17, 'Registro al docente Gustavo Artur', '2022-03-23', '10:27:55'),
(4, 17, 'Registro al docente Juan Alba', '2022-03-23', '10:29:55'),
(5, 17, 'Añadio un nuevo horario del 3 semestre de ING de Sistemas del Diurno', '2022-03-23', '11:52:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id_horario` int(255) NOT NULL,
  `titulo_horario` varchar(255) NOT NULL,
  `urlHorario` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `cod_materia` varchar(250) NOT NULL,
  `asignatura` varchar(100) NOT NULL,
  `uc` int(100) NOT NULL,
  `turno` varchar(100) NOT NULL,
  `semestre` int(100) NOT NULL,
  `horas_materias` int(7) NOT NULL,
  `carrera_id` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`cod_materia`, `asignatura`, `uc`, `turno`, `semestre`, `horas_materias`, `carrera_id`) VALUES
('ADG-25123', 'Hombre,Sociedad,Ciencia y Tecnologia', 3, 'Diurno', 1, 4, 'SITM333'),
('ADG-25131', 'Semeinario I', 1, 'Diurno', 1, 1, 'SITM333'),
('ADG-25132', 'Educacion Ambiental', 2, 'Diurno', 1, 3, 'SITM333'),
('ADG-25141', 'SEMINARIO II', 1, 'Diurno', 2, 1, 'SITM333'),
('ADG-30214', 'METODOLOGIA  DE LA INVESTIGACION', 4, 'Diurno', 7, 5, 'SITM333'),
('ADG-30224', 'GERENCIA DE LA INFORMÁTICA', 4, 'Diurno', 7, 5, 'SITM333'),
('AGG-22313', 'SISTEMAS ADMINISTRATIVOS ', 4, 'Diurno', 3, 6, 'SITM333'),
('AGL-30214', 'SISTEMAS DE PRODUCCIÓN ', 4, 'Diurno', 4, 6, 'SITM333'),
('CJU-37314', 'MARCO  LEGAL PARA EL EJERCICIO DE LA INGENIERÍA ', 4, 'Diurno', 8, 4, 'SITM333'),
('DIN-21113', 'Defensa Integral de la Nacion I', 3, 'Diurno', 1, 4, 'SITM333'),
('DIN-21123', 'DEFENSA INTEGRAL DE LA NACION II', 3, 'Diurno', 2, 4, 'SITM333'),
('DIN-21133', 'DEFENSA INTEGRAL DE LA NACION III', 3, 'Diurno', 3, 4, 'SITM333'),
('DIN-31143', 'DEFENSA INTEGRAL DE LA NACION IV', 3, 'Diurno', 4, 4, 'SITM333'),
('DIN-31153', 'DEFENSA INTEGRAL DE LA NACION V', 3, 'Diurno', 5, 4, 'SITM333'),
('DIN-31163', 'DEFENSA INTEGRAL DE LA NACION VI', 3, 'Diurno', 6, 4, 'SITM333'),
('DIN-31173', 'DEFENSA INTEGRAL DE LA NACION VII', 3, 'Diurno', 7, 4, 'SITM333'),
('DIN-31183', 'DEFENSA INTEGRAL DE LA NACION VIII', 3, 'Diurno', 8, 4, 'SITM333'),
('ELN-30514', 'CIRCUITOS LÓGICOS', 4, 'Diurno', 5, 5, 'SITM333'),
('IDM-24113', 'Ingles', 3, 'Diurno', 1, 4, 'SITM333'),
('IDM-24123', 'INGLÉS II', 3, 'Diurno', 2, 4, 'SITM333'),
('MAT-21114', 'ÁLGEBRA LINEAL', 4, 'Diurno', 2, 6, 'SITM333'),
('MAT-21212', 'Dibujo', 2, 'Diurno', 1, 4, 'SITM333'),
('MAT-21215', 'Matematica I', 5, 'Diurno', 1, 6, 'SITM333'),
('MAT-21225', 'MATEMÁTICA II', 5, 'Diurno', 2, 6, 'SITM333'),
('MAT-21235', 'MATEMÁTICA III', 5, 'Diurno', 3, 6, 'SITM333'),
('MAT-21414', 'PROBABILIDADES Y ESTADÍSTICA ', 4, 'Diurno', 3, 6, 'SITM333'),
('MAT-30925', 'INVESTIGACIÓN DE OPERACIONES ', 5, 'Diurno', 5, 7, 'SITM333'),
('MAT-30935', 'OPTIMIZACIÓN NO LINEAL', 5, 'Diurno', 6, 7, 'SITM333'),
('MAT-30945', 'SIMULACIÓN Y MODELOS', 5, 'Diurno', 7, 7, 'SITM333'),
('MAT-31114', 'TEORÍA DE GRAFOS', 4, 'Diurno', 5, 6, 'SITM333'),
('MAT-31214', 'LÓGICA MATEMÁTICA', 4, 'Diurno', 4, 6, 'SITM333'),
('MAT-31314', 'TEORÍA DE DECISIONES', 4, 'Diurno', 8, 5, 'SITM333'),
('MAT-31414', 'PROCESOS ESTOCÁSTICOS', 4, 'Diurno', 6, 6, 'SITM333'),
('MAT-31714', 'CÁLCULO NUMÉRICO', 4, 'Diurno', 4, 6, 'SITM333'),
('MAT_21524', 'Geometria Analitica', 4, 'Diurno', 1, 5, 'SITM333'),
('NOT-7TEC', 'ELECTIVA NO TÉCNICA', 3, 'Diurno', 7, 3, 'SITM333'),
('NOT-7TECN', 'ELECTIVA TÉCNICA', 3, 'Diurno', 7, 3, 'SITM333'),
('NOT-8TEC', 'ELECTIVA NO TÉCNICA', 3, 'Diurno', 8, 3, 'SITM333'),
('NOT-8TECN', 'ELECTIVA TÉCNICA', 3, 'Diurno', 8, 3, 'SITM333'),
('PSJ-30010', 'Pasantia', 0, 'Diurno', 9, 0, 'SITM333'),
('QUF-22014', 'QUÍMICA GENERAL', 4, 'Diurno', 2, 7, 'SITM333'),
('QUF-23015', 'FÍSICA I', 5, 'Diurno', 2, 8, 'SITM333'),
('QUF-23025', 'FÍSICA II', 5, 'Diurno', 3, 8, 'SITM333'),
('SYC-22113', 'PROGRAMACIÓN', 3, 'Diurno', 3, 5, 'SITM333'),
('SYC-30525', 'ARQUITECTURA DEL COMPUTADOR', 5, 'Diurno', 6, 7, 'SITM333'),
('SYC-30834', 'SISTEMAS OPERATIVOS', 4, 'Diurno', 6, 6, 'SITM333'),
('SYC-31644', 'REDES ', 4, 'Diurno', 7, 6, 'SITM333'),
('SYC-32114', 'TEORÍA DE LOS SISTEMAS ', 4, 'Diurno', 4, 6, 'SITM333'),
('SYC-32225', 'LENGUAJES DE PROGRAMACIÓN I', 5, 'Diurno', 4, 7, 'SITM333'),
('SYC-32235', 'LENGUAJES DE PROGRAMACIÓN II', 5, 'Diurno', 5, 7, 'SITM333'),
('SYC-32245', 'LENGUAJES DE PROGRAMACIÓN III', 5, 'Diurno', 6, 7, 'SITM333'),
('SYC-32414', 'PROCESAMIENTO DE DATOS ', 4, 'Diurno', 4, 0, 'SITM333'),
('SYC-32514', 'ANÁLISIS DE SISTEMAS', 4, 'Diurno', 5, 6, 'SITM333'),
('SYC-32524', 'DISEÑO DE SISTEMAS', 4, 'Diurno', 6, 6, 'SITM333'),
('SYC-32614', 'BASES DE DATOS', 4, 'Diurno', 5, 6, 'SITM333'),
('SYC-32714', 'IMPLANTACIÓN DE SISTEMAS', 4, 'Diurno', 7, 6, 'SITM333'),
('SYC-32814', 'AUDITORÍA DE SISTEMAS', 4, 'Diurno', 8, 6, 'SITM333'),
('TTC-31154', 'TELEPROCESOS', 4, 'Diurno', 8, 6, 'SITM333');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `documento` varchar(10) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` int(200) NOT NULL,
  `materia_asignada` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`documento`, `nombre`, `apellido`, `email`, `telefono`, `materia_asignada`) VALUES
('V10234543', 'Maria', 'alba', 'correo@hotma.com', 2147483647, 'MAT-21215,MAT-21225,MAT-21235'),
('V12345321', 'jose', 'rengel', 'freddy271@hotmail.com', 242571611, 'ADG-25131,ELN-30514'),
('V13456456', 'josefa', 'robles', 'testf1@gmai.com', 2147483647, 'MAT-21414,SYC-32414'),
('V14564543', 'Gustavo', 'Artur', 'gusartu@hotmail.com', 2147483647, 'SYC-22113'),
('V15678765', 'Carlos', 'Arturo', 'arturo@hotmail.com', 2147483647, 'AGG-22313,MAT-21114'),
('V17890876', 'freddy', 'rengel', 'freddy@hotmail.com', 2147483647, 'QUF-23025,QUF-23015'),
('V5456456', 'jose', 'castillo', 'test2@gmail.com', 2147483647, 'DIN-21133,DIN-21123'),
('V7567890', 'alex', 'Uzcategui', 'preva1@gmail.com', 2147483647, 'SYC-22113'),
('V9807654', 'Juan', 'Alba', 'juanalb@hotmail.com', 2147483647, 'DIN-21133');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(7) NOT NULL,
  `doc_usuario` varchar(200) NOT NULL,
  `nombre_usuario` varchar(200) NOT NULL,
  `apellido_usuario` varchar(200) NOT NULL,
  `email_usuario` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `doc_usuario`, `nombre_usuario`, `apellido_usuario`, `email_usuario`, `password`) VALUES
(17, 'V27908541', 'freddy', 'rengel', 'freddy27@hotmail.com', '$2a$10$V9WNJdBLglG3aVKkt1ATWOpZv2UrJOKBnqXvTPFgyHdEHWFTGPGcq'),
(19, 'V27908542', 'freddy', 'rengel', 'freddy2@hotmail.com', '$2a$10$VO3.iQIpIUUlgO.Ux1wvpeZ7viNtuGop.AG1mp6cHzgqdJpmOvNQW'),
(20, 'V27908512', 'Carlos', 'Arturo', 'freddy27@gmail.com', '$2a$10$qy8SfFPlJof2sLZtl4EHzugQKkpG6CUT6lMtln/QdVULIIZRhPtMu'),
(21, 'V28908541', 'freddy', 'rengel', 'freddy@hotmail.com', '$2a$10$UVAOkJPYj.SVX66WpbWdfOZNJlHYW91Oqf6ztgo7mJ1RV5IE.MO7.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id_carrera`);

--
-- Indices de la tabla `data_horarios`
--
ALTER TABLE `data_horarios`
  ADD PRIMARY KEY (`id_registro`),
  ADD KEY `id_profesor` (`id_profesor`),
  ADD KEY `id_materia` (`id_materia`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`id_Historia`),
  ADD KEY `fk_historia_usuarios` (`id_user`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id_horario`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`cod_materia`),
  ADD KEY `fk_materia_carrera` (`carrera_id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`documento`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `data_horarios`
--
ALTER TABLE `data_horarios`
  MODIFY `id_registro` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `id_Historia` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id_horario` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `data_horarios`
--
ALTER TABLE `data_horarios`
  ADD CONSTRAINT `data_horarios_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`cod_materia`),
  ADD CONSTRAINT `data_horarios_ibfk_2` FOREIGN KEY (`id_profesor`) REFERENCES `profesores` (`documento`);

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `fk_historia_usuarios` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `fk_materia_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id_carrera`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
