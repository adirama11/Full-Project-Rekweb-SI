-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Nov 2022 pada 07.03
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
-- Database: `service_user`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `refresh_token`
--

CREATE TABLE `refresh_token` (
  `id` int(11) NOT NULL,
  `token` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_ad` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_ad` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
('20221010225123-create-table-users.js'),
('20221010225150-create-table-refresh-token.js'),
('20221019093803--create-table-khs.js'),
('20221101003430-create-table-khs.js'),
('20221101003545-create-table-dosen.js');

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
  `created_ad` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_ad` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `profession`, `avatar`, `role`, `email`, `pass`, `created_ad`, `updated_ad`) VALUES
(1, 'Suyud', 'Administrator', NULL, 'admin', 'ohyud@gmail.com', '$2b$10$9/dnG4Ac0P.IrbeANrJyp.aNwKtz3eYxq2rbcbRSgazMRfPeXzYra', '2022-10-10 23:44:58', '2022-10-10 23:44:58'),
(2, 'Widodo', 'Operator', NULL, '', 'widodo@gmail.com', '$2b$10$UQ3WPc53ecqeGZ8UsEba7OtZoLSrdMIRx8fFOmtqakjc6VG8SRYhS', '2022-10-10 23:44:58', '2022-10-10 23:44:58'),
(4, 'Jidane Adi R', 'Operator', 'Harimau', 'operator', 'jidane@gmail.com', '$2b$10$mufhYM.D2gj/6UOEv8eP.Ol5HOW3Xceyt/DFQznSI0qBk5LvoPdkS', '2022-10-29 05:56:35', '2022-10-30 05:29:26'),
(8, 'Barier', 'Operator', 'Ang', 'operator', 'bar@gmail.com', '$2b$10$CTX6Hs/eONYj5fXBM7l3kuwX54sTrs/g3oiwOBDSEKJ6L3C2x.GH2', '2022-10-31 23:08:46', '2022-11-02 08:39:33'),
(11, 'Mari', 'Operator', NULL, 'operator', 'abcd@gmail.com', '$2b$10$JLZbi2YyivJPolH.RojlK.H44.cv6hPEVCRiA3GzSNBHzme453zPC', '2022-11-02 09:50:38', '2022-11-02 09:50:38'),
(12, 'Marisa', 'Operator', NULL, 'operator', 'ay@gmail.com', '$2b$10$HAhox7crHrsJB.VQGXye3OEHEHJ4ybReI4y6ATkNJBfseO.UZNQ9q', '2022-11-02 09:52:02', '2022-11-02 09:52:02'),
(16, 'Adi Rama', 'Operator', 'Ang', 'operator', 'adik@gmail.com', '$2b$10$Uzd2hfX3CxKBWKv3xMx4qefLc8b/luH8tZrrrwOzuvFFKLbHllrku', '2022-11-04 05:41:12', '2022-11-09 09:43:58'),
(17, 'Jidane adi', 'Administrator', 'Manusia', 'operator', 'j@gmail.co.id', '$2b$10$nAmt444IB9pXMgKw9GIeMOs0NHmriVEo3BbYYUzREbn.jYV8ssJ12', '2022-11-09 09:43:11', '2022-11-09 09:50:26'),
(18, 'Megantara', 'Operator', NULL, 'operator', 'm@gmail.com', '$2b$10$VZU/AUa7tIDMIFDtbO3WF.qTVn5P7NXQkgQWRwjOzr296jkSlNNU6', '2022-11-09 09:53:06', '2022-11-09 09:53:06'),
(19, 'Adi Rama', 'Operator', 'Ang', 'operator', 'adik2@gmail.com', '$2b$10$eOFedgbKtYBjkNfReQaKkOhH0tdP2WSOdM0FXcFjhc0j1yj4mq1Uq', '2022-11-10 07:49:31', '2022-11-10 07:50:18');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `refresh_token`
--
ALTER TABLE `refresh_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `REFRESH_TOKEN_USERS_ID` (`user_id`);

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
-- AUTO_INCREMENT untuk tabel `refresh_token`
--
ALTER TABLE `refresh_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `refresh_token`
--
ALTER TABLE `refresh_token`
  ADD CONSTRAINT `REFRESH_TOKEN_USERS_ID` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
