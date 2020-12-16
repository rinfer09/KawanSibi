-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2020 at 07:46 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kawansibi`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(20) NOT NULL,
  `nama_depan` varchar(20) DEFAULT NULL,
  `nama_belakang` varchar(30) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `no_hp` varchar(15) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `jenis_kelamin` varchar(10) DEFAULT NULL,
  `n_abjad` int(11) DEFAULT 0,
  `n_angka` int(11) NOT NULL DEFAULT 0,
  `n_orang` int(11) NOT NULL DEFAULT 0,
  `n_tempat` int(11) NOT NULL DEFAULT 0,
  `n_pekerjaan` int(11) NOT NULL DEFAULT 0,
  `n_keluarga` int(11) NOT NULL DEFAULT 0,
  `n_buah` int(11) NOT NULL DEFAULT 0,
  `n_perasaan` int(11) NOT NULL DEFAULT 0,
  `n_hari` int(11) NOT NULL DEFAULT 0,
  `n_ujian` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `nama_depan`, `nama_belakang`, `email`, `no_hp`, `password`, `tanggal_lahir`, `jenis_kelamin`, `n_abjad`, `n_angka`, `n_orang`, `n_tempat`, `n_pekerjaan`, `n_keluarga`, `n_buah`, `n_perasaan`, `n_hari`, `n_ujian`) VALUES
('dennisf', NULL, NULL, 'dennis123@gmail.com', NULL, '$2b$10$/PJ6XVeARCdOt2jszpCGb.Otm2WX4trzbOsWugZsWeZpwYiFpDxUW', NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
