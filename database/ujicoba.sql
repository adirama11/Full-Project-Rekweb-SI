-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Des 2022 pada 11.49
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ujicoba`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220801091548-create-table-users.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` enum('admin','operator') NOT NULL DEFAULT 'operator',
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `token` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `profession`, `avatar`, `role`, `email`, `pass`, `token`, `created_at`, `updated_at`) VALUES
(1, 'rapopo', 'operator', NULL, 'operator', 'r@gmail.com', '$2b$10$f3Bsz0WBFlypBnU81x20yu2TNzaUlOcACLARbf2/yoSklF9nDkg1y', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjEsIm5hbWUiOiJyYXBvcG8iLCJwcm9mZXNpIjoib3BlcmF0b3IiLCJyb2xlIjoib3BlcmF0b3IiLCJlbWFpbCI6InJAZ21haWwuY29tIiwiaWF0IjoxNjcwMjM1OTAyLCJleHAiOjE2NzAyMzU5MTd9.ugXWjfck1Yq2m1Fqgql7ayXnCMy4eRrWuiLRDdwRlEY', '2022-12-01 11:41:21', '2022-12-05 10:25:02'),
(2, 'jidane', 'operator', NULL, 'operator', 'j@gmail.com', '$2b$10$vouUY2iz6mX5LkZjijhXmeoeDtTy6tyDrjRwtLTQG/VWGlA84YRrm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjIsIm5hbWUiOiJqaWRhbmUiLCJwcm9mZXNpIjoib3BlcmF0b3IiLCJyb2xlIjoib3BlcmF0b3IiLCJlbWFpbCI6ImpAZ21haWwuY29tIiwiaWF0IjoxNjcwMjM2ODg3LCJleHAiOjE2NzAyMzY5MDJ9.0VhnEhMqvMi6cQtqxuI-Q39fTPE3hsEkLZwvM6VReik', '2022-12-05 06:29:28', '2022-12-05 10:41:27');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQUE_USERS_EMAIL` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
