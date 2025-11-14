-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2025 at 04:25 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `windows_explorer`
--

-- --------------------------------------------------------

--
-- Table structure for table `folders`
--

CREATE TABLE `folders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `folders`
--

INSERT INTO `folders` (`id`, `name`, `parent_id`) VALUES
(1, 'Dokumen Pribadi', NULL),
(2, 'Project Bisnis', NULL),
(3, 'Media & Foto', NULL),
(4, 'Aplikasi & Tools', NULL),
(5, 'Arsip 2024', NULL),
(6, 'CV & Sertifikat', 1),
(7, 'Keuangan', 1),
(8, 'Surat Penting', 1),
(9, 'Catatan Kuliah', 1),
(10, 'Asuransi', 1),
(11, 'Pemasaran', 2),
(12, 'Pengembangan Produk', 2),
(13, 'Laporan Keuangan Q2', 2),
(14, 'Rapat Tim', 2),
(15, 'Klien Aktif', 2),
(16, 'Liburan Bali', 3),
(17, 'Acara Keluarga', 3),
(18, 'Video Editing', 3),
(19, 'Wallpaper HD', 3),
(20, 'Proyek Desain', 3),
(21, 'Installer', 4),
(22, 'Utilities', 4),
(23, 'Scripts Python', 4),
(24, 'Backup Konfigurasi', 4),
(25, 'Template Desain', 4),
(26, 'Q1 Selesai', 5),
(27, 'Q2 Selesai', 5),
(28, 'Q3 Selesai', 5),
(29, 'Email Lama', 5),
(30, 'Data Tidak Terpakai', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `folders`
--
ALTER TABLE `folders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `folders`
--
ALTER TABLE `folders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `folders`
--
ALTER TABLE `folders`
  ADD CONSTRAINT `folders_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `folders` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
