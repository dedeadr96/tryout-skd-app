// script.js

// --- KONFIGURASI & DATA ---
const DURATION = 100 * 60; // 100 menit dalam detik
const PASSING_GRADES = {
    TWK: 65,
    TIU: 80,
    TKP: 166,
};
const STATIC_QUESTIONS = [
    // --- TWK (30 Soal) ---
    { category: 'TWK', question: 'Pancasila sebagai ideologi terbuka memiliki makna bahwa nilai-nilai dasarnya dapat dikembangkan sesuai dengan dinamika kehidupan bangsa Indonesia dan tuntutan zaman secara kreatif, dengan memperhatikan tingkat kebutuhan dan perkembangan masyarakat Indonesia sendiri. Hal ini merupakan ciri dari dimensi...', answer: 'Fleksibilitas', options: ['Idealisme', 'Normatif', 'Realita', 'Fleksibilitas'] },
    { category: 'TWK', question: 'Lembaga negara yang memiliki wewenang untuk mengubah dan menetapkan Undang-Undang Dasar adalah...', answer: 'Majelis Permusyawaratan Rakyat (MPR)', options: ['Dewan Perwakilan Rakyat (DPR)', 'Mahkamah Konstitusi (MK)', 'Presiden', 'Majelis Permusyawaratan Rakyat (MPR)'] },
    { category: 'TWK', question: 'Bhinneka Tunggal Ika pertama kali diungkapkan dalam kitab...', answer: 'Sutasoma', options: ['Negarakertagama', 'Sutasoma', 'Arjunawiwaha', 'Pararaton'] },
    { category: 'TWK', question: 'Peran Indonesia dalam pendirian Gerakan Non-Blok (GNB) merupakan implementasi dari politik luar negeri yang bersifat...', answer: 'Bebas Aktif', options: ['Bebas Aktif', 'Netral', 'Intervensi', 'Defensif'] },
    { category: 'TWK', question: 'Hari Kesaktian Pancasila diperingati setiap tanggal...', answer: '1 Oktober', options: ['1 Juni', '17 Agustus', '1 Oktober', '28 Oktober'] },
    { category: 'TWK', question: 'Dalam struktur pemerintahan, yang memegang kekuasaan eksekutif adalah...', answer: 'Presiden', options: ['MPR', 'DPR', 'Presiden', 'MA'] },
    { category: 'TWK', question: 'Siapakah tokoh yang mengetik naskah proklamasi kemerdekaan Indonesia?', answer: 'Sayuti Melik', options: ['Soekarno', 'Mohammad Hatta', 'Ahmad Soebardjo', 'Sayuti Melik'] },
    { category: 'TWK', question: 'Lagu kebangsaan Indonesia Raya diciptakan oleh...', answer: 'W.R. Supratman', options: ['Ismail Marzuki', 'C. Simanjuntak', 'W.R. Supratman', 'Ibu Sud'] },
    { category: 'TWK', question: 'Tujuan utama dari negara Republik Indonesia yang tercantum dalam pembukaan UUD 1945 alinea ke-4 adalah, kecuali...', answer: 'Menguasai sumber daya alam dunia', options: ['Melindungi segenap bangsa Indonesia', 'Memajukan kesejahteraan umum', 'Mencerdaskan kehidupan bangsa', 'Menguasai sumber daya alam dunia'] },
    { category: 'TWK', question: 'Sistem pemerintahan yang dianut Indonesia saat ini adalah...', answer: 'Presidensial', options: ['Parlementer', 'Monarki', 'Presidensial', 'Republik Absolut'] },
    { category: 'TWK', question: 'Pahlawan nasional yang dikenal dengan julukan Ayam Jantan dari Timur adalah...', answer: 'Sultan Hasanuddin', options: ['Pangeran Diponegoro', 'Sultan Hasanuddin', 'Tuanku Imam Bonjol', 'Kapitan Pattimura'] },
    { category: 'TWK', question: 'Asas dalam otonomi daerah yang berarti penyerahan wewenang pemerintahan oleh Pemerintah Pusat kepada daerah otonom adalah...', answer: 'Desentralisasi', options: ['Dekonsentrasi', 'Tugas Pembantuan', 'Sentralisasi', 'Desentralisasi'] },
    { category: 'TWK', question: 'Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia (BPUPKI) diketuai oleh...', answer: 'Dr. K.R.T. Radjiman Wedyodiningrat', options: ['Ir. Soekarno', 'Drs. Mohammad Hatta', 'Mr. Soepomo', 'Dr. K.R.T. Radjiman Wedyodiningrat'] },
    { category: 'TWK', question: 'Konferensi Meja Bundar (KMB) dilaksanakan di kota...', answer: 'Den Haag', options: ['Jakarta', 'Linggarjati', 'Den Haag', 'New York'] },
    { category: 'TWK', question: 'Wawasan Nusantara adalah cara pandang bangsa Indonesia tentang diri dan lingkungannya yang berlandaskan...', answer: 'Pancasila dan UUD 1945', options: ['Adat Istiadat', 'Sejarah Perjuangan', 'Pancasila dan UUD 1945', 'Kepentingan Nasional'] },
    { category: 'TWK', question: 'Makna dari sila kedua Pancasila adalah...', answer: 'Pengakuan adanya martabat manusia', options: ['Keyakinan terhadap Tuhan YME', 'Pengakuan adanya martabat manusia', 'Persatuan seluruh rakyat Indonesia', 'Kedaulatan di tangan rakyat'] },
    { category: 'TWK', question: 'Contoh sikap positif terhadap nilai-nilai Pancasila di lingkungan masyarakat adalah...', answer: 'Ikut serta dalam kegiatan gotong royong', options: ['Belajar dengan giat', 'Menaati peraturan sekolah', 'Ikut serta dalam kegiatan gotong royong', 'Membayar pajak tepat waktu'] },
    { category: 'TWK', question: 'Proses amandemen UUD 1945 dilakukan oleh MPR sebanyak...', answer: 'Empat kali', options: ['Satu kali', 'Dua kali', 'Tiga kali', 'Empat kali'] },
    { category: 'TWK', question: 'Bela negara merupakan hak dan kewajiban setiap warga negara yang diatur dalam UUD 1945 pasal...', answer: 'Pasal 27 Ayat 3', options: ['Pasal 27 Ayat 1', 'Pasal 27 Ayat 3', 'Pasal 30 Ayat 1', 'Pasal 31 Ayat 1'] },
    { category: 'TWK', question: 'Contoh ancaman terhadap integrasi nasional di bidang ideologi adalah...', answer: 'Masuknya paham komunisme atau liberalisme', options: ['Agresi militer dari negara lain', 'Masuknya paham komunisme atau liberalisme', 'Tingginya angka kemiskinan', 'Kerusakan lingkungan hidup'] },
    { category: 'TWK', question: 'Lembaga yang berwenang mengadili pada tingkat kasasi adalah...', answer: 'Mahkamah Agung (MA)', options: ['Pengadilan Negeri', 'Pengadilan Tinggi', 'Mahkamah Agung (MA)', 'Mahkamah Konstitusi (MK)'] },
    { category: 'TWK', question: 'Sumpah Pemuda diikrarkan pada tanggal...', answer: '28 Oktober 1928', options: ['20 Mei 1908', '17 Agustus 1945', '28 Oktober 1928', '10 November 1945'] },
    { category: 'TWK', question: 'Tiga fungsi utama DPR adalah legislasi, anggaran, dan...', answer: 'Pengawasan', options: ['Yudikasi', 'Eksekusi', 'Pengawasan', 'Moneter'] },
    { category: 'TWK', question: 'Yang dimaksud dengan Hukum Tata Negara adalah...', answer: 'Hukum yang mengatur organisasi negara', options: ['Hukum yang mengatur hubungan antar individu', 'Hukum yang mengatur tindak pidana', 'Hukum yang mengatur organisasi negara', 'Hukum yang mengatur perdagangan internasional'] },
    { category: 'TWK', question: 'Sikap nasionalisme dapat diwujudkan dengan cara...', answer: 'Mencintai produk dalam negeri', options: ['Membenci budaya asing', 'Menganggap suku sendiri paling unggul', 'Mencintai produk dalam negeri', 'Tidak peduli dengan urusan negara'] },
    { category: 'TWK', question: 'Lambang negara Garuda Pancasila dirancang oleh...', answer: 'Sultan Hamid II', options: ['Ir. Soekarno', 'Sultan Hamid II', 'Mohammad Yamin', 'W.R. Supratman'] },
    { category: 'TWK', question: 'Piagam Jakarta (Jakarta Charter) dirumuskan oleh...', answer: 'Panitia Sembilan', options: ['BPUPKI', 'PPKI', 'Panitia Sembilan', 'KNIP'] },
    { category: 'TWK', question: 'Kekuasaan untuk membentuk undang-undang disebut kekuasaan...', answer: 'Legislatif', options: ['Eksekutif', 'Yudikatif', 'Legislatif', 'Federatif'] },
    { category: 'TWK', question: 'Bendera negara Sang Merah Putih pertama kali dikibarkan pada saat...', answer: 'Proklamasi Kemerdekaan 17 Agustus 1945', options: ['Sumpah Pemuda 1928', 'Proklamasi Kemerdekaan 17 Agustus 1945', 'Sidang BPUPKI', 'Konferensi Meja Bundar'] },
    { category: 'TWK', question: 'Penyelenggaraan pemerintahan yang bersih dan bebas dari KKN (Korupsi, Kolusi, dan Nepotisme) disebut...', answer: 'Good Governance', options: ['Civil Society', 'Good Governance', 'Rule of Law', 'Checks and Balances'] },
    // --- TIU (35 Soal) ---
    { category: 'TIU', question: 'Semua murid pandai berhitung. Sebagian murid pandai berbahasa Inggris. Simpulan yang tepat adalah...', answer: 'Sebagian murid pandai berhitung dan berbahasa Inggris', options: ['Semua murid pandai berhitung dan berbahasa Inggris', 'Sebagian murid pandai berhitung dan berbahasa Inggris', 'Semua murid yang pandai berbahasa Inggris, pandai berhitung', 'Sebagian murid yang pandai berhitung, tidak pandai berbahasa Inggris'] },
    { category: 'TIU', question: 'Padanan kata untuk VIRTUAL adalah...', answer: 'Maya', options: ['Nyata', 'Impian', 'Maya', 'Hampa'] },
    { category: 'TIU', question: 'Lawan kata dari PROMINEN adalah...', answer: 'Biasa', options: ['Terkenal', 'Unggul', 'Biasa', 'Menonjol'] },
    { category: 'TIU', question: '2, 3, 5, 8, 13, ... Bilangan selanjutnya adalah...', answer: '21', options: ['17', '19', '21', '23'] },
    { category: 'TIU', question: 'Jika A > B, B > C, dan D < C, maka pernyataan yang pasti salah adalah...', answer: 'D > A', options: ['A > C', 'B > D', 'A > D', 'D > A'] },
    { category: 'TIU', question: 'Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Kecepatan rata-rata mobil tersebut adalah...', answer: '60 km/jam', options: ['50 km/jam', '60 km/jam', '70 km/jam', '80 km/jam'] },
    { category: 'TIU', question: 'Kuda : Lari = Ikan : ...', answer: 'Berenang', options: ['Terbang', 'Berenang', 'Makan', 'Insang'] },
    { category: 'TIU', question: 'Harga 5 buah buku adalah Rp 25.000. Berapa harga 8 buah buku yang sama?', answer: 'Rp 40.000', options: ['Rp 30.000', 'Rp 35.000', 'Rp 40.000', 'Rp 45.000'] },
    { category: 'TIU', question: 'Jika x = 25% dari 80, dan y = 80% dari 25, maka...', answer: 'x = y', options: ['x > y', 'x < y', 'x = y', 'Hubungan x dan y tidak dapat ditentukan'] },
    { category: 'TIU', question: 'INSOMNIA : TIDUR = ... : ...', answer: 'AMNESIA : INGATAN', options: ['HAUS : MINUM', 'AMNESIA : INGATAN', 'LAPAR : MAKAN', 'PINTAR : BELAJAR'] },
    { category: 'TIU', question: 'A, C, F, J, O, ... Huruf selanjutnya adalah...', answer: 'U', options: ['P', 'R', 'S', 'U'] },
    { category: 'TIU', question: 'Pekerjaan dapat diselesaikan oleh 8 orang dalam 15 hari. Jika pekerjaan ingin diselesaikan dalam 12 hari, berapa banyak pekerja yang dibutuhkan?', answer: '10 orang', options: ['9 orang', '10 orang', '11 orang', '12 orang'] },
    { category: 'TIU', question: 'Ayah : Anak = Pohon : ...', answer: 'Tunas', options: ['Akar', 'Daun', 'Ranting', 'Tunas'] },
    { category: 'TIU', question: 'Berapakah 15% dari 200?', answer: '30', options: ['15', '20', '30', '40'] },
    { category: 'TIU', question: 'Semua bunga di taman mawar berwarna merah. Sinta memetik bunga di taman. Simpulan yang tepat adalah...', answer: 'Belum tentu Sinta memetik bunga mawar merah', options: ['Bunga yang dipetik Sinta berwarna merah', 'Sinta tidak memetik bunga mawar', 'Belum tentu Sinta memetik bunga mawar merah', 'Semua bunga yang dipetik Sinta pasti mawar'] },
    { category: 'TIU', question: 'Padanan kata untuk KREDIBILITAS adalah...', answer: 'Dapat dipercaya', options: ['Kemampuan', 'Kecepatan', 'Dapat dipercaya', 'Kekuatan'] },
    { category: 'TIU', question: 'Lawan kata dari NISBI adalah...', answer: 'Mutlak', options: ['Relatif', 'Pasti', 'Mutlak', 'Objektif'] },
    { category: 'TIU', question: '99, 96, 91, 84, 75, ... Bilangan selanjutnya adalah...', answer: '64', options: ['66', '65', '64', '63'] },
    { category: 'TIU', question: 'Seorang pedagang membeli barang dengan harga Rp 80.000 dan menjualnya dengan keuntungan 25%. Berapa harga jual barang tersebut?', answer: 'Rp 100.000', options: ['Rp 90.000', 'Rp 95.000', 'Rp 100.000', 'Rp 105.000'] },
    { category: 'TIU', question: 'Lingkaran : Bola = Persegi : ...', answer: 'Kubus', options: ['Segitiga', 'Kubus', 'Garis', 'Persegi Panjang'] },
    { category: 'TIU', question: 'Jika hari ini adalah Senin, maka 60 hari kemudian adalah hari...', answer: 'Jumat', options: ['Rabu', 'Kamis', 'Jumat', 'Sabtu'] },
    { category: 'TIU', question: 'Semua A adalah B. Sebagian C adalah A. Maka...', answer: 'Sebagian C adalah B', options: ['Semua C adalah B', 'Semua B adalah C', 'Sebagian C adalah B', 'Tidak ada simpulan yang benar'] },
    { category: 'TIU', question: 'Padanan kata untuk FRIKSI adalah...', answer: 'Perpecahan', options: ['Gesekan', 'Perpecahan', 'Persatuan', 'Kesamaan'] },
    { category: 'TIU', question: 'Lawan kata dari MANDIRI adalah...', answer: 'Bergantung', options: ['Sendiri', 'Bebas', 'Bergantung', 'Otonom'] },
    { category: 'TIU', question: '3, 4, 7, 11, 18, 29, ... Bilangan selanjutnya adalah...', answer: '47', options: ['39', '42', '47', '50'] },
    { category: 'TIU', question: 'Umur Budi 3 tahun lebih tua dari Ani. Jumlah umur mereka adalah 27 tahun. Berapa umur Budi?', answer: '15 tahun', options: ['12 tahun', '14 tahun', '15 tahun', '16 tahun'] },
    { category: 'TIU', question: 'Pesawat : Pilot = Kereta Api : ...', answer: 'Masinis', options: ['Supir', 'Nakhoda', 'Masinis', 'Konduktor'] },
    { category: 'TIU', question: '(15 x 4) + (15 x 6) = ...', answer: '150', options: ['100', '120', '150', '200'] },
    { category: 'TIU', question: 'Jika tidak ada lalu lintas, maka saya tiba di kantor dalam 20 menit. Hari ini ada lalu lintas. Simpulannya adalah...', answer: 'Saya mungkin terlambat tiba di kantor', options: ['Saya pasti terlambat tiba di kantor', 'Saya tidak akan tiba di kantor', 'Saya mungkin terlambat tiba di kantor', 'Saya tiba di kantor tepat waktu'] },
    { category: 'TIU', question: 'Padanan kata untuk EKSKAVASI adalah...', answer: 'Penggalian', options: ['Pembangunan', 'Perusakan', 'Penggalian', 'Pelestarian'] },
    { category: 'TIU', question: 'Lawan kata dari CHAOS adalah...', answer: 'Tertib', options: ['Kacau', 'Rusuh', 'Tertib', 'Tenang'] },
    { category: 'TIU', question: '1, 4, 9, 16, 25, ... Bilangan selanjutnya adalah...', answer: '36', options: ['30', '32', '35', '36'] },
    { category: 'TIU', question: 'Sebuah wadah berisi 5 bola merah dan 3 bola biru. Peluang terambilnya bola biru pada satu kali pengambilan adalah...', answer: '3/8', options: ['5/8', '3/8', '3/5', '1/3'] },
    { category: 'TIU', question: 'Gelap : Terang = Basah : ...', answer: 'Kering', options: ['Air', 'Hujan', 'Kering', 'Lembab'] },
    { category: 'TIU', question: '5 + (-3) x 4 = ...', answer: '-7', options: ['8', '-7', '23', '-2'] },
    // --- TKP (45 Soal) ---
    { category: 'TKP', question: 'Anda ditugaskan untuk menyelesaikan sebuah pekerjaan yang sangat mendesak. Namun, di saat yang bersamaan, seorang rekan kerja meminta bantuan Anda untuk mengerjakan tugasnya yang juga memiliki tenggat waktu. Sikap Anda...', options: [ { text: 'Menolak permintaannya karena tugas saya lebih penting.', score: 2 }, { text: 'Menyelesaikan tugas saya terlebih dahulu, lalu membantunya jika masih ada waktu.', score: 4 }, { text: 'Membantunya sebentar, lalu kembali mengerjakan tugas saya.', score: 3 }, { text: 'Menyarankannya untuk meminta bantuan rekan lain yang lebih lowong.', score: 1 }, { text: 'Mengajaknya untuk berkolaborasi, membagi waktu untuk menyelesaikan kedua tugas secara efisien.', score: 5 } ] },
    { category: 'TKP', question: 'Saat sedang bekerja, Anda menemukan sebuah metode baru yang dapat meningkatkan efisiensi kerja tim secara signifikan. Langkah yang Anda ambil adalah...', options: [ { text: 'Menyimpannya untuk diri sendiri agar kinerja saya terlihat paling menonjol.', score: 1 }, { text: 'Mencobanya sendiri terlebih dahulu secara diam-diam.', score: 2 }, { text: 'Membagikan temuan tersebut kepada rekan kerja terdekat saja.', score: 3 }, { text: 'Mengusulkan metode tersebut kepada atasan dan tim saat rapat untuk didiskusikan bersama.', score: 5 }, { text: 'Langsung menerapkan metode tersebut tanpa persetujuan siapa pun.', score: 4 } ] },
    { category: 'TKP', question: 'Anda menerima kritik yang cukup pedas dari atasan mengenai hasil kerja Anda. Reaksi Anda adalah...', options: [ { text: 'Merasa tersinggung dan marah karena merasa kerja keras saya tidak dihargai.', score: 1 }, { text: 'Menerima kritik tersebut, mengucapkan terima kasih, dan menjadikannya sebagai bahan evaluasi untuk perbaikan.', score: 5 }, { text: 'Mencari pembenaran dan menyalahkan faktor eksternal atas kekurangan hasil kerja saya.', score: 2 }, { text: 'Mengabaikan kritik tersebut dan bekerja seperti biasa.', score: 3 }, { text: 'Mendengarkan kritiknya, tetapi tetap merasa bahwa cara saya sudah yang terbaik.', score: 4 } ] },
    { category: 'TKP', question: 'Tim Anda mengalami kegagalan dalam sebuah proyek penting. Sebagai anggota tim, apa yang Anda lakukan?', options: [ { text: 'Mencari siapa yang paling bersalah dalam tim sebagai penyebab kegagalan.', score: 1 }, { text: 'Merasa kecewa dan kehilangan motivasi untuk proyek selanjutnya.', score: 2 }, { text: 'Mengajak seluruh anggota tim untuk melakukan evaluasi bersama, mencari akar masalah, dan belajar dari kesalahan tersebut.', score: 5 }, { text: 'Fokus pada tugas saya sendiri dan tidak mau tahu urusan anggota lain.', score: 3 }, { text: 'Menunggu instruksi dari atasan mengenai langkah selanjutnya.', score: 4 } ] },
    { category: 'TKP', question: 'Anda dihadapkan pada peraturan baru di kantor yang menurut Anda kurang efisien dan menghambat pekerjaan. Sikap Anda...', options: [ { text: 'Mengeluh tentang peraturan tersebut kepada rekan-rekan kerja.', score: 2 }, { text: 'Tetap mengikuti peraturan tersebut dengan terpaksa meskipun tidak setuju.', score: 3 }, { text: 'Mencari cara untuk mengakali peraturan tersebut agar pekerjaan tetap berjalan lancar.', score: 1 }, { text: 'Mencoba memahami latar belakang peraturan tersebut dan menjalankannya, sambil mengumpulkan data untuk memberikan masukan konstruktif kepada manajemen.', score: 5 }, { text: 'Secara terbuka menentang peraturan tersebut dalam setiap kesempatan.', score: 4 } ] },
    { category: 'TKP', question: 'Seorang pelanggan datang dengan keluhan yang sangat emosional dan tidak masuk akal. Cara Anda menghadapinya adalah...', options: [ { text: 'Ikut terbawa emosi dan berdebat dengannya.', score: 1 }, { text: 'Mendengarkan dengan tenang dan sabar, menunjukkan empati, lalu mencoba mencari solusi terbaik untuk masalahnya.', score: 5 }, { text: 'Memintanya untuk tenang terlebih dahulu sebelum mau melayaninya.', score: 3 }, { text: 'Mengalihkan keluhannya kepada rekan kerja yang lain.', score: 2 }, { text: 'Menjelaskan secara tegas bahwa keluhannya tidak beralasan.', score: 4 } ] },
    { category: 'TKP', question: 'Anda memiliki ide brilian untuk sebuah proyek, namun rekan kerja Anda mengajukan ide yang berbeda. Saat presentasi, ide rekan Anda yang lebih diterima oleh atasan. Sikap Anda...', options: [ { text: 'Merasa kecewa dan tidak mendukung pelaksanaan ide rekan tersebut.', score: 1 }, { text: 'Memberikan selamat kepada rekan tersebut dan menawarkan bantuan serta dukungan penuh untuk merealisasikan idenya demi keberhasilan tim.', score: 5 }, { text: 'Bekerja setengah hati karena bukan ide saya yang dipakai.', score: 2 }, { text: 'Secara diam-diam mencari kelemahan dari ide rekan tersebut.', score: 3 }, { text: 'Menerima keputusan atasan tetapi tetap meyakini ide saya lebih baik.', score: 4 } ] },
    { category: 'TKP', question: 'Di lingkungan kerja yang baru, Anda menyadari bahwa cara kerja di sana sangat berbeda dengan pengalaman Anda sebelumnya. Yang Anda lakukan adalah...', options: [ { text: 'Tetap menggunakan cara kerja lama karena sudah terbukti berhasil.', score: 1 }, { text: 'Mengkritik cara kerja yang baru karena dianggap tidak efisien.', score: 2 }, { text: 'Cepat beradaptasi, mempelajari sistem dan budaya kerja yang baru, serta bersikap terbuka terhadap hal-hal baru.', score: 5 }, { text: 'Bekerja seadanya sambil mencari peluang untuk pindah.', score: 3 }, { text: 'Hanya bergaul dengan orang-orang yang memiliki cara kerja yang sama dengan saya.', score: 4 } ] },
    { category: 'TKP', question: 'Anda diminta untuk mempelajari sebuah software baru untuk menunjang pekerjaan, namun Anda merasa kesulitan dan tidak familiar dengan teknologi. Tindakan Anda...', options: [ { text: 'Menyerah dan meminta atasan untuk memberikan tugas lain.', score: 1 }, { text: 'Meminta rekan kerja untuk mengerjakan bagian yang menggunakan software tersebut.', score: 2 }, { text: 'Mencari tutorial, bertanya kepada rekan yang lebih paham, dan meluangkan waktu ekstra untuk belajar hingga mahir.', score: 5 }, { text: 'Mengerjakannya semampu saya saja tanpa berusaha lebih.', score: 3 }, { text: 'Berpura-pura sudah mengerti saat ditanya oleh atasan.', score: 4 } ] },
    { category: 'TKP', question: 'Integritas sebagai seorang ASN paling tepat diwujudkan dalam bentuk...', options: [ { text: 'Datang dan pulang kerja selalu tepat waktu.', score: 4 }, { text: 'Menyelesaikan semua tugas yang diberikan oleh atasan.', score: 3 }, { text: 'Menolak segala bentuk gratifikasi atau suap yang berkaitan dengan jabatan dan kewenangan.', score: 5 }, { text: 'Berpakaian rapi sesuai dengan aturan yang berlaku.', score: 2 }, { text: 'Aktif dalam setiap kegiatan seremonial di kantor.', score: 1 } ] },
    { category: 'TKP', question: 'Anda melihat rekan kerja Anda melakukan kesalahan yang dapat merugikan instansi. Apa yang akan Anda lakukan?', options: [ { text: 'Mendiamkannya karena bukan urusan saya.', score: 1 }, { text: 'Melaporkannya langsung kepada atasan tanpa berbicara dengannya terlebih dahulu.', score: 3 }, { text: 'Menegurnya secara pribadi dengan baik-baik dan mengingatkannya akan konsekuensi tindakannya.', score: 5 }, { text: 'Menceritakannya kepada rekan-rekan kerja yang lain.', score: 2 }, { text: 'Menunggu hingga kesalahan tersebut diketahui oleh orang lain.', score: 4 } ] },
    { category: 'TKP', question: 'Menurut Anda, cara terbaik untuk menjaga hubungan baik dengan rekan kerja adalah...', options: [ { text: 'Selalu menyetujui pendapat mereka agar tidak terjadi konflik.', score: 2 }, { text: 'Menjaga jarak dan bersikap profesional saja.', score: 3 }, { text: 'Membangun komunikasi yang terbuka, saling menghargai perbedaan pendapat, dan siap membantu saat dibutuhkan.', score: 5 }, { text: 'Hanya bergaul dengan rekan yang satu divisi.', score: 1 }, { text: 'Sering mentraktir mereka saat jam makan siang.', score: 4 } ] },
    { category: 'TKP', question: 'Saat rapat, pendapat Anda tidak disetujui oleh mayoritas peserta rapat. Sikap Anda...', options: [ { text: 'Tetap mempertahankan pendapat saya dan berdebat hingga disetujui.', score: 1 }, { text: 'Merasa kesal dan diam selama sisa rapat.', score: 2 }, { text: 'Menerima keputusan mayoritas dengan lapang dada dan mendukung keputusan bersama tersebut.', score: 5 }, { text: 'Mengajak beberapa orang untuk membentuk kubu yang mendukung pendapat saya.', score: 3 }, { text: 'Menyatakan ketidaksetujuan saya secara terang-terangan setelah rapat selesai.', score: 4 } ] },
    { category: 'TKP', question: 'Atasan memberikan tugas tambahan di luar deskripsi pekerjaan utama Anda. Anda akan...', options: [ { text: 'Menolaknya dengan alasan itu bukan tugas saya.', score: 1 }, { text: 'Menerimanya dengan gerutuan dan mengerjakannya dengan asal-asalan.', score: 2 }, { text: 'Melihatnya sebagai kesempatan untuk belajar hal baru dan mengembangkan kemampuan, lalu mengerjakannya dengan sungguh-sungguh.', score: 5 }, { text: 'Menerimanya, tetapi meminta imbalan tambahan.', score: 3 }, { text: 'Mengerjakannya sambil mengeluh kepada rekan kerja lain.', score: 4 } ] },
    { category: 'TKP', question: 'Anda melihat ada fasilitas kantor yang rusak karena pemakaian yang tidak benar. Apa yang Anda lakukan?', options: [ { text: 'Menganggapnya bukan tanggung jawab saya.', score: 1 }, { text: 'Melaporkan kerusakan tersebut kepada bagian yang berwenang dan menyarankan untuk dibuatkan aturan pemakaian yang benar.', score: 5 }, { text: 'Mencoba memperbaikinya sendiri meskipun tidak memiliki keahlian.', score: 3 }, { text: 'Menyalahkan orang yang terakhir kali memakainya.', score: 2 }, { text: 'Mendiamkannya saja, toh masih banyak fasilitas lain.', score: 4 } ] },
    { category: 'TKP', question: 'Bagaimana Anda mengelola stres akibat beban kerja yang tinggi?', options: [ { text: 'Sering mengambil cuti sakit untuk menghindar dari pekerjaan.', score: 1 }, { text: 'Melampiaskannya dengan marah-marah di media sosial.', score: 2 }, { text: 'Membuat skala prioritas pekerjaan, fokus pada satu tugas dalam satu waktu, dan mengambil jeda singkat untuk relaksasi.', score: 5 }, { text: 'Membawa pekerjaan pulang ke rumah setiap hari hingga larut malam.', score: 4 }, { text: 'Minum minuman berenergi secara berlebihan agar tetap terjaga.', score: 3 } ] },
    { category: 'TKP', question: 'Instansi Anda akan menerapkan sistem digitalisasi baru yang akan mengubah total cara kerja saat ini. Sikap Anda...', options: [ { text: 'Pesimis bahwa sistem baru tersebut akan berhasil.', score: 2 }, { text: 'Bersemangat untuk mempelajari sistem baru tersebut dan aktif berpartisipasi dalam pelatihannya.', score: 5 }, { text: 'Merasa cemas karena takut tidak bisa mengikuti perubahan.', score: 3 }, { text: 'Menganggapnya hanya akan menambah beban pekerjaan.', score: 1 }, { text: 'Menunggu rekan lain berhasil menggunakannya terlebih dahulu, baru saya akan mencoba.', score: 4 } ] },
    { category: 'TKP', question: 'Seorang warga datang meminta pelayanan di luar jam kerja. Kantor sudah akan tutup. Yang Anda lakukan...', options: [ { text: 'Menolaknya dengan tegas dan memintanya datang besok pagi.', score: 2 }, { text: 'Melayaninya dengan cepat dan seadanya agar saya bisa segera pulang.', score: 3 }, { text: 'Dengan ramah menjelaskan bahwa jam pelayanan sudah habis, namun memberikan informasi yang jelas kapan dan bagaimana dia bisa mendapatkan pelayanan keesokan harinya.', score: 4 }, { text: 'Melayaninya dengan sabar dan tuntas karena memahami mungkin ada kebutuhan mendesak, sebagai bentuk pengabdian.', score: 5 }, { text: 'Pura-pura tidak melihatnya dan bergegas pulang.', score: 1 } ] },
    { category: 'TKP', question: 'Anda menemukan informasi rahasia mengenai instansi yang bocor di internet. Tindakan pertama yang paling tepat adalah...', options: [ { text: 'Ikut menyebarkan informasi tersebut agar semua orang tahu.', score: 1 }, { text: 'Mencoba mencari tahu siapa yang membocorkannya.', score: 3 }, { text: 'Segera melapor kepada atasan atau pihak yang bertanggung jawab atas keamanan informasi di instansi.', score: 5 }, { text: 'Menulis komentar di internet yang membantah informasi tersebut.', score: 4 }, { text: 'Tidak peduli karena itu urusan tim IT.', score: 2 } ] },
    { category: 'TKP', question: 'Dalam sebuah diskusi tim, ide Anda selalu disanggah oleh seorang rekan kerja. Anda akan...', options: [ { text: 'Membalas menyanggah semua idenya tanpa peduli kualitas idenya.', score: 1 }, { text: 'Menjadi malas untuk mengeluarkan ide lagi di kemudian hari.', score: 2 }, { text: 'Tetap tenang dan mencoba menjelaskan dasar pemikiran ide saya secara logis dan berbasis data.', score: 5 }, { text: 'Mengajaknya berdebat secara personal setelah diskusi selesai.', score: 3 }, { text: 'Menganggapnya sebagai musuh dalam pekerjaan.', score: 4 } ] },
    { category: 'TKP', question: 'Anda adalah seorang pimpinan unit. Salah satu anggota tim Anda menunjukkan kinerja yang terus menurun. Langkah pertama yang Anda ambil adalah...', options: [ { text: 'Langsung memberikannya surat peringatan.', score: 2 }, { text: 'Mengeluarkannya dari tim agar tidak mempengaruhi yang lain.', score: 1 }, { text: 'Mengajaknya bicara secara pribadi untuk memahami masalah yang sedang dihadapinya dan menawarkan bantuan.', score: 5 }, { text: 'Mengurangi beban kerjanya dengan harapan kinerjanya membaik.', score: 4 }, { text: 'Menyindirnya di depan anggota tim yang lain saat rapat.', score: 3 } ] },
    { category: 'TKP', question: 'Jaringan internet di kantor tiba-tiba mati dan sangat mengganggu pekerjaan Anda yang membutuhkan koneksi internet. Anda akan...', options: [ { text: 'Langsung pulang karena tidak bisa bekerja.', score: 1 }, { text: 'Menggunakan waktu untuk mengobrol dan bersantai dengan rekan kerja.', score: 2 }, { text: 'Mencari pekerjaan lain yang bisa diselesaikan secara offline atau merapikan berkas-berkas.', score: 5 }, { text: 'Terus menerus komplain kepada bagian IT.', score: 3 }, { text: 'Menggunakan tethering dari HP pribadi untuk pekerjaan yang sangat mendesak sambil menunggu jaringan pulih.', score: 4 } ] },
    { category: 'TKP', question: 'Anda diminta untuk memberikan presentasi penting mewakili tim Anda, namun Anda merasa sangat gugup berbicara di depan umum. Upaya Anda adalah...', options: [ { text: 'Meminta rekan lain untuk menggantikan saya.', score: 2 }, { text: 'Mempersiapkan materi dengan sangat baik, berlatih berulang kali, dan fokus untuk menyampaikan pesan dengan jelas.', score: 5 }, { text: 'Datang ke presentasi tanpa persiapan apa pun.', score: 1 }, { text: 'Membaca teks sepanjang presentasi tanpa melihat audiens.', score: 3 }, { text: 'Berharap presentasi dibatalkan.', score: 4 } ] },
    { category: 'TKP', question: 'Sikap yang paling menggambarkan orientasi pada pelayanan adalah...', options: [ { text: 'Mengerjakan tugas sesuai dengan apa yang diperintahkan saja.', score: 2 }, { text: 'Selalu berusaha memahami kebutuhan masyarakat, bersikap ramah, dan memberikan solusi terbaik.', score: 5 }, { text: 'Memberikan pelayanan lebih cepat kepada orang yang dikenal.', score: 1 }, { text: 'Memastikan semua laporan pekerjaan selesai tepat waktu.', score: 4 }, { text: 'Menyelesaikan pekerjaan secepat mungkin agar bisa beristirahat.', score: 3 } ] },
    { category: 'TKP', question: 'Anda memiliki banyak sekali tugas dengan tenggat waktu yang hampir bersamaan. Strategi Anda adalah...', options: [ { text: 'Mengerjakan tugas yang paling mudah terlebih dahulu.', score: 3 }, { text: 'Merasa panik dan tidak tahu harus mulai dari mana.', score: 1 }, { text: 'Membuat daftar semua tugas, mengurutkannya berdasarkan skala prioritas dan urgensi, lalu mengerjakannya satu per satu.', score: 5 }, { text: 'Mengerjakan semua tugas secara bersamaan sedikit-sedikit.', score: 4 }, { text: 'Meminta perpanjangan waktu untuk semua tugas.', score: 2 } ] },
    { category: 'TKP', question: 'Kemampuan untuk bekerja sama dalam kelompok ditunjukkan dengan...', options: [ { text: 'Selalu menjadi pemimpin dalam setiap kegiatan.', score: 3 }, { text: 'Mampu mendengarkan pendapat orang lain, memberikan kontribusi positif, dan menjaga kekompakan tim.', score: 5 }, { text: 'Mengerjakan bagian tugasnya sendiri dengan baik tanpa peduli dengan anggota lain.', score: 4 }, { text: 'Selalu setuju dengan ide dari ketua kelompok.', score: 2 }, { text: 'Menjadi anggota yang pasif dan hanya mengikuti alur.', score: 1 } ] },
    { category: 'TKP', question: 'Anda mendapatkan promosi jabatan, yang berarti tanggung jawab Anda akan semakin besar. Anda merasa...', options: [ { text: 'Khawatir tidak mampu mengemban tanggung jawab baru tersebut.', score: 3 }, { text: 'Senang karena gaji akan naik, tetapi tidak terlalu memikirkan tanggung jawabnya.', score: 2 }, { text: 'Tertantang dan bersemangat untuk belajar dan memberikan kontribusi yang lebih besar bagi organisasi.', score: 5 }, { text: 'Biasa saja, karena itu adalah hal yang wajar.', score: 4 }, { text: 'Takut hubungan dengan rekan kerja yang lain menjadi renggang.', score: 1 } ] },
    { category: 'TKP', question: 'Menurut Anda, ASN yang profesional adalah yang...', options: [ { text: 'Memiliki banyak sertifikat keahlian.', score: 3 }, { text: 'Memiliki kompetensi tinggi, berintegritas, bertanggung jawab, dan terus mau belajar dan berkembang.', score: 5 }, { text: 'Selalu mengikuti perintah atasan tanpa bertanya.', score: 2 }, { text: 'Sudah mengabdi selama puluhan tahun di instansi yang sama.', score: 4 }, { text: 'Memiliki penampilan yang selalu rapi dan menarik.', score: 1 } ] },
    { category: 'TKP', question: 'Ada program pelatihan dari kantor yang diadakan di luar kota pada akhir pekan. Sikap Anda...', options: [ { text: 'Menolak ikut karena akhir pekan adalah waktu untuk keluarga.', score: 3 }, { text: 'Mengikutinya jika mendapatkan uang saku yang besar.', score: 2 }, { text: 'Melihatnya sebagai investasi pengembangan diri dan bersedia mengikutinya dengan antusias.', score: 5 }, { text: 'Mengikutinya dengan terpaksa karena diperintahkan atasan.', score: 4 }, { text: 'Mencari alasan agar tidak perlu ikut serta.', score: 1 } ] },
    { category: 'TKP', question: 'Ketika Anda membuat keputusan yang ternyata salah dan berdampak buruk, Anda akan...', options: [ { text: 'Mencari kambing hitam untuk disalahkan.', score: 1 }, { text: 'Berusaha menutupi kesalahan tersebut.', score: 2 }, { text: 'Secara ksatria mengakui kesalahan, bertanggung jawab atas dampaknya, dan segera mencari solusi perbaikan.', score: 5 }, { text: 'Berharap tidak ada yang menyadari kesalahan tersebut.', score: 3 }, { text: 'Menyesalinya terus-menerus tanpa melakukan tindakan apa pun.', score: 4 } ] },
    { category: 'TKP', question: 'Teknologi informasi berkembang sangat pesat. Sebagai seorang ASN, Anda menyikapinya dengan...', options: [ { text: 'Menganggapnya tidak relevan dengan pekerjaan saya yang bersifat administratif.', score: 1 }, { text: 'Merasa cukup dengan kemampuan teknologi yang dimiliki saat ini.', score: 2 }, { text: 'Mencoba mempelajarinya hanya jika diwajibkan oleh kantor.', score: 3 }, { text: 'Secara proaktif belajar dan beradaptasi dengan teknologi baru untuk meningkatkan kualitas dan kecepatan pelayanan.', score: 5 }, { text: 'Meminta generasi yang lebih muda untuk menangani hal-hal yang berkaitan dengan teknologi.', score: 4 } ] },
    { category: 'TKP', question: 'Rekan kerja Anda seringkali curhat masalah pribadinya kepada Anda di jam kerja. Hal ini cukup mengganggu konsentrasi Anda. Anda akan...', options: [ { text: 'Memarahinya dan menyuruhnya berhenti mengganggu.', score: 1 }, { text: 'Mendengarkannya dengan terpaksa sambil tetap mencoba bekerja.', score: 3 }, { text: 'Menyarankan dengan sopan untuk membicarakan hal tersebut saat jam istirat atau setelah jam kerja agar tidak mengganggu pekerjaan.', score: 5 }, { text: 'Melaporkannya kepada atasan karena ia tidak bekerja secara profesional.', score: 2 }, { text: 'Mengabaikannya dan memasang headset.', score: 4 } ] },
    { category: 'TKP', question: 'Dalam penggunaan media sosial, seorang ASN sebaiknya...', options: [ { text: 'Bebas mengekspresikan pendapat apa pun termasuk ujaran kebencian.', score: 1 }, { text: 'Menjaga tutur kata, tidak menyebarkan berita bohong (hoax), dan menjaga nama baik instansi serta korps ASN.', score: 5 }, { text: 'Tidak memiliki akun media sosial sama sekali untuk menghindari masalah.', score: 3 }, { text: 'Menggunakan media sosial hanya untuk memamerkan gaya hidup.', score: 2 }, { text: 'Mengunci semua akun media sosialnya agar tidak bisa dilihat publik.', score: 4 } ] },
    { category: 'TKP', question: 'Anda menemukan adanya pemborosan anggaran di unit kerja Anda. Yang Anda lakukan adalah...', options: [ { text: 'Ikut menikmati pemborosan tersebut.', score: 1 }, { text: 'Diam saja karena takut dianggap ikut campur.', score: 2 }, { text: 'Mengusulkan ide-ide penghematan kepada atasan dengan didukung data yang akurat.', score: 5 }, { text: 'Membicarakannya di belakang dengan rekan-rekan kerja.', score: 3 }, { text: 'Menulis surat kaleng kepada pimpinan tertinggi.', score: 4 } ] },
    { category: 'TKP', question: 'Pentingnya jejaring kerja (networking) bagi seorang ASN adalah untuk...', options: [ { text: 'Mencari keuntungan pribadi.', score: 1 }, { text: 'Mempermudah koordinasi, berbagi informasi, dan berkolaborasi untuk mencapai tujuan organisasi yang lebih besar.', score: 5 }, { text: 'Sekadar menambah jumlah teman.', score: 2 }, { text: 'Agar terlihat sebagai orang yang supel dan banyak kenalan.', score: 3 }, { text: 'Mencari tahu kelemahan instansi lain.', score: 4 } ] },
    { category: 'TKP', question: 'Anda diminta mengerjakan tugas yang sama sekali baru dan belum pernah Anda kerjakan sebelumnya. Anda akan...', options: [ { text: 'Langsung mengatakan tidak sanggup.', score: 1 }, { text: 'Menerimanya sebagai tantangan, mencari referensi, dan bertanya kepada senior atau atasan sebagai panduan.', score: 5 }, { text: 'Menerimanya, tetapi menunda-nunda untuk memulainya.', score: 3 }, { text: 'Mengerjakannya dengan cara meniru persis pekerjaan rekan lain pada tugas sejenis.', score: 4 }, { text: 'Mengeluh karena merasa diberi tugas yang sulit.', score: 2 } ] },
    { category: 'TKP', question: 'Saat melayani masyarakat, Anda mendapati ada seorang penyandang disabilitas yang kesulitan mengakses layanan. Anda akan...', options: [ { text: 'Menganggap itu masalah pribadinya.', score: 1 }, { text: 'Menyarankannya untuk datang bersama pendamping lain kali.', score: 2 }, { text: 'Secara proaktif menghampirinya, menanyakan kesulitan yang dihadapi, dan membantunya mendapatkan pelayanan dengan cara yang paling nyaman baginya.', score: 5 }, { text: 'Menunggu ia meminta bantuan terlebih dahulu.', score: 3 }, { text: 'Mengarahkan ke petugas keamanan untuk membantunya.', score: 4 } ] },
    { category: 'TKP', question: 'Tim Anda berhasil mencapai target yang luar biasa. Sebagai pimpinan, Anda akan...', options: [ { text: 'Menganggap keberhasilan itu adalah berkat kerja keras saya sendiri.', score: 1 }, { text: 'Memberikan apresiasi kepada seluruh anggota tim secara adil dan merayakan keberhasilan tersebut bersama-sama.', score: 5 }, { text: 'Memberikan bonus hanya kepada anggota tim favorit saya.', score: 2 }, { text: 'Langsung memberikan target baru yang lebih tinggi tanpa memberikan apresiasi.', score: 3 }, { text: 'Menganggapnya sebagai hal yang biasa saja.', score: 4 } ] },
    { category: 'TKP', question: 'Anda tidak sengaja mendengar atasan Anda memberikan informasi yang salah kepada klien. Anda...', options: [ { text: 'Membiarkannya karena atasan lebih tahu.', score: 2 }, { text: 'Menyela pembicaraan dan langsung mengoreksinya di depan klien.', score: 3 }, { text: 'Menunggu hingga pembicaraan selesai, lalu dengan sopan menyampaikan koreksi kepada atasan secara pribadi.', score: 5 }, { text: 'Menceritakan kesalahan atasan kepada rekan-rekan lain.', score: 1 }, { text: 'Mengirim email koreksi kepada klien tanpa sepengetahuan atasan.', score: 4 } ] },
    { category: 'TKP', question: 'Apa yang Anda pahami tentang anti korupsi?', options: [ { text: 'Tidak menerima uang suap dalam jumlah besar.', score: 2 }, { text: 'Sebuah sikap menentang segala bentuk penyalahgunaan wewenang yang dapat merugikan keuangan negara dan masyarakat, sekecil apapun bentuknya.', score: 5 }, { text: 'Hanya tidak melakukan korupsi uang negara.', score: 3 }, { text: 'Sebuah slogan yang sering didengungkan pemerintah.', score: 1 }, { text: 'Menghindari berurusan dengan pihak swasta.', score: 4 } ] },
    { category: 'TKP', question: 'Rekan kerja Anda yang berbeda suku dan agama dengan Anda sedang merayakan hari besar keagamaannya. Anda akan...', options: [ { text: 'Bersikap biasa saja dan tidak peduli.', score: 2 }, { text: 'Menghindarinya karena khawatir mengganggu.', score: 3 }, { text: 'Memberikan ucapan selamat dan menunjukkan sikap toleransi serta menghargai perbedaannya.', score: 5 }, { text: 'Mengajaknya berdebat tentang keyakinan.', score: 1 }, { text: 'Menanyakan apakah ia mendapatkan libur tambahan.', score: 4 } ] },
    { category: 'TKP', question: 'Anda melihat ada ketidakadilan dalam pembagian tugas di tim Anda. Anda akan...', options: [ { text: 'Menerima saja karena tidak ingin menimbulkan masalah.', score: 2 }, { text: 'Membicarakannya dengan pimpinan secara baik-baik, dengan data dan argumen yang objektif, untuk mencari solusi yang lebih adil.', score: 5 }, { text: 'Mengajak rekan-rekan lain untuk melakukan protes.', score: 3 }, { text: 'Menjadi tidak bersemangat dalam bekerja.', score: 1 }, { text: 'Meminta untuk dipindahkan ke tim lain.', score: 4 } ] },
    { category: 'TKP', question: 'Bagaimana cara Anda memastikan kualitas pekerjaan Anda tetap terjaga?', options: [ { text: 'Bekerja dengan cepat agar semua selesai.', score: 2 }, { text: 'Selalu meminta orang lain untuk memeriksa hasil pekerjaan saya.', score: 3 }, { text: 'Melakukan pengecekan ulang (self-review) terhadap hasil pekerjaan sebelum diserahkan dan selalu terbuka terhadap masukan.', score: 5 }, { text: 'Menggunakan standar yang sama dengan rekan kerja lainnya.', score: 4 }, { text: 'Yakin bahwa pekerjaan saya selalu sempurna.', score: 1 } ] },
    { category: 'TKP', question: 'Anda dihadapkan pada dua pilihan pekerjaan yang sama-sama penting dan mendesak. Anda akan...', options: [ { text: 'Memilih yang lebih saya sukai.', score: 2 }, { text: 'Mengerjakan keduanya sekaligus dengan terburu-buru.', score: 3 }, { text: 'Menganalisis mana yang memiliki dampak dan urgensi paling tinggi, lalu mengerjakannya terlebih dahulu, dan segera beralih ke tugas kedua.', score: 5 }, { 'text': 'Melempar salah satu tugas kepada rekan kerja.', score: 4 }, { 'text': 'Merasa bingung dan akhirnya tidak mengerjakan keduanya.', score: 1 } ] },
    { category: 'TKP', question: 'Saat jam istirat, beberapa rekan kerja mengajak Anda untuk bergosip tentang salah seorang pimpinan. Sikap Anda...', options: [ { text: 'Antusias bergabung dan ikut menambahkan cerita.', score: 1 }, { text: 'Hanya mendengarkan saja tanpa ikut berkomentar.', score: 3 }, { text: 'Menolak secara halus dan mengalihkan pembicaraan ke topik lain yang lebih positif.', score: 5 }, { text: 'Menasihati mereka dengan keras agar tidak bergosip.', score: 4 }, { text: 'Pergi meninggalkan mereka tanpa berkata apa-apa.', score: 2 } ] }
];


// --- STATE MANAGEMENT ---
let QUESTIONS = [...STATIC_QUESTIONS]; // Soal yang aktif digunakan, bisa statis atau dari AI
let nextAiQuestions = null; // Penampung soal dari AI untuk tryout berikutnya
let isGeneratingQuestions = false; // Flag untuk status pembuatan soal oleh AI

let currentQuestionIndex = 0;
let userAnswers = new Array(QUESTIONS.length).fill(null);
let timerInterval;
let timeRemaining = DURATION;
let lastScores = {}; // To store the latest scores for Gemini analysis

// --- DOM ELEMENTS ---
const welcomeScreen = document.getElementById('welcome-screen');
const tryoutScreen = document.getElementById('tryout-screen');
const resultScreen = document.getElementById('result-screen');
const aiStatus = document.getElementById('ai-status');


const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const restartBtn = document.getElementById('restart-btn');
const finishTryoutNavBtn = document.getElementById('finish-tryout-nav-btn');
const getAnalysisBtn = document.getElementById('get-analysis-btn');
const analysisContainer = document.getElementById('analysis-container');


const timerDisplay = document.getElementById('timer');
const questionCategory = document.getElementById('question-category');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNavGrid = document.getElementById('question-nav-grid');

// --- FUNCTIONS ---

function startTryout() {
    welcomeScreen.classList.add('opacity-0');

    if (nextAiQuestions) {
        console.log("Menggunakan soal dari AI untuk sesi ini.");
        QUESTIONS = nextAiQuestions;
        nextAiQuestions = null; // Gunakan dan kosongkan
        aiStatus.textContent = "Menggunakan set soal baru dari AI.";
    } else {
        console.log("Menggunakan soal statis untuk sesi ini.");
        QUESTIONS = [...STATIC_QUESTIONS];
        aiStatus.textContent = "Menggunakan set soal standar.";
    }

    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        tryoutScreen.classList.remove('hidden');
        tryoutScreen.classList.add('opacity-100');
        
        currentQuestionIndex = 0;
        userAnswers = new Array(QUESTIONS.length).fill(null);
        timeRemaining = DURATION;
        
        analysisContainer.classList.add('hidden');
        analysisContainer.innerHTML = '';
        getAnalysisBtn.disabled = false;
        getAnalysisBtn.textContent = '✨ Dapatkan Analisis & Pembahasan';

        loadQuestion(currentQuestionIndex);
        renderQuestionNav();
        startTimer();

        // Siapkan soal untuk tryout berikutnya di latar belakang
        if (!isGeneratingQuestions) {
            prepareNextAiQuestions();
        }
    }, 500);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishTryout();
        }
    }, 1000);
}

function loadQuestion(index) {
    const question = QUESTIONS[index];
    questionCategory.textContent = question.category;
    questionNumber.textContent = index + 1;
    questionText.textContent = question.question;

    optionsContainer.innerHTML = '';
    const options = question.options;
    
    // Randomize options for TWK and TIU
    const shuffledOptions = (question.category === 'TWK' || question.category === 'TIU')
        ? [...options].sort(() => Math.random() - 0.5)
        : options;

    shuffledOptions.forEach(option => {
        const optionValue = typeof option === 'object' ? option.text : option;
        const optionElement = document.createElement('label');
        optionElement.className = 'flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:bg-indigo-50';
        
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'option';
        radioInput.value = optionValue;
        radioInput.className = 'h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300';
        radioInput.onclick = () => selectOption(index, optionValue);

        if (userAnswers[index] === optionValue) {
            radioInput.checked = true;
            optionElement.classList.add('bg-indigo-100', 'border-indigo-400');
        }

        const optionText = document.createElement('span');
        optionText.className = 'ml-4 text-gray-700';
        optionText.textContent = optionValue;

        optionElement.appendChild(radioInput);
        optionElement.appendChild(optionText);
        optionsContainer.appendChild(optionElement);
    });
    
    updateNavButtons();
}

function selectOption(index, selectedValue) {
    userAnswers[index] = selectedValue;
    // Visually update the selected option
    const labels = optionsContainer.querySelectorAll('label');
    labels.forEach(label => {
        const input = label.querySelector('input');
        if (input.value === selectedValue) {
            label.classList.add('bg-indigo-100', 'border-indigo-400');
        } else {
            label.classList.remove('bg-indigo-100', 'border-indigo-400');
        }
    });
    updateQuestionNavStatus(index, true);
}


function updateNavButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.classList.toggle('opacity-50', currentQuestionIndex === 0);
    
    if (currentQuestionIndex === QUESTIONS.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
}

function renderQuestionNav() {
    questionNavGrid.innerHTML = '';
    QUESTIONS.forEach((q, index) => {
        const navBtn = document.createElement('button');
        navBtn.textContent = index + 1;
        navBtn.className = `w-10 h-10 flex items-center justify-center rounded-md font-medium transition-colors duration-200 border-2`;
        navBtn.classList.add(userAnswers[index] === null ? 'bg-gray-200' : 'bg-green-200', 'border-transparent');
        navBtn.onclick = () => jumpToQuestion(index);
        questionNavGrid.appendChild(navBtn);
    });
    highlightCurrentQuestionNav(currentQuestionIndex);
}

function updateQuestionNavStatus(index, answered) {
    const navBtn = questionNavGrid.children[index];
    if (navBtn) {
        navBtn.classList.remove('bg-gray-200', 'bg-green-200');
        navBtn.classList.add(answered ? 'bg-green-200' : 'bg-gray-200');
    }
}

function highlightCurrentQuestionNav(index) {
    for (let i = 0; i < questionNavGrid.children.length; i++) {
        questionNavGrid.children[i].classList.remove('border-indigo-500');
    }
    questionNavGrid.children[index].classList.add('border-indigo-500');
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestion(index);
    highlightCurrentQuestionNav(index);
}


function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        highlightCurrentQuestionNav(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        highlightCurrentQuestionNav(currentQuestionIndex);
    }
}

function confirmFinish() {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const totalCount = QUESTIONS.length;
    let confirmationMessage = `Anda telah menjawab ${answeredCount} dari ${totalCount} soal. Apakah Anda yakin ingin menyelesaikan ujian?`;
    if(answeredCount < totalCount){
       confirmationMessage += ` Masih ada soal yang belum terjawab.`;
    }

    const modalHTML = `
        <div id="confirm-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div class="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full">
                <h3 class="text-lg font-bold mb-4">Konfirmasi Selesaikan Ujian</h3>
                <p class="text-gray-600 mb-6">${confirmationMessage}</p>
                <div class="flex justify-end space-x-4">
                    <button id="cancel-finish" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Batal</button>
                    <button id="confirm-finish-btn" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Ya, Selesaikan</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    document.getElementById('confirm-finish-btn').onclick = () => {
        document.getElementById('confirm-modal').remove();
        finishTryout();
    };
    document.getElementById('cancel-finish').onclick = () => {
        document.getElementById('confirm-modal').remove();
    };

}


function finishTryout() {
    clearInterval(timerInterval);
    const scores = calculateScores();
    displayResults(scores);

    tryoutScreen.classList.add('opacity-0');
    setTimeout(() => {
        tryoutScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        resultScreen.classList.add('opacity-100');
    }, 500);
}

function calculateScores() {
    let twkScore = 0;
    let tiuScore = 0;
    let tkpScore = 0;

    QUESTIONS.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer === null) return;

        if (q.category === 'TWK' || q.category === 'TIU') {
            if (userAnswer === q.answer) {
                if (q.category === 'TWK') twkScore += 5;
                if (q.category === 'TIU') tiuScore += 5;
            }
        } else if (q.category === 'TKP') {
            const selectedOption = q.options.find(opt => opt.text === userAnswer);
            if (selectedOption) {
                tkpScore += selectedOption.score;
            }
        }
    });
    return { twkScore, tiuScore, tkpScore };
}

function displayResults(scores) {
    lastScores = scores; // Store scores for Gemini analysis
    const { twkScore, tiuScore, tkpScore } = scores;
    const totalScore = twkScore + tiuScore + tkpScore;

    const twkStatus = twkScore >= PASSING_GRADES.TWK;
    const tiuStatus = tiuScore >= PASSING_GRADES.TIU;
    const tkpStatus = tkpScore >= PASSING_GRADES.TKP;
    const overallStatus = twkStatus && tiuStatus && tkpStatus;
    
    document.getElementById('result-title').textContent = overallStatus ? '🎉 Selamat, Anda Lulus! 🎉' : 'Tetap Semangat, Coba Lagi!';
    document.getElementById('result-status').textContent = overallStatus 
        ? 'Anda memenuhi semua passing grade.' 
        : 'Anda belum memenuhi passing grade. Teruslah berlatih!';
    document.getElementById('result-status').className = `text-2xl font-semibold mb-6 ${overallStatus ? 'text-green-600' : 'text-red-600'}`;

    const scoreDetailsContainer = document.getElementById('score-details');
    scoreDetailsContainer.innerHTML = '';
    const categories = [
        { name: 'TWK', score: twkScore, pg: PASSING_GRADES.TWK, status: twkStatus },
        { name: 'TIU', score: tiuScore, pg: PASSING_GRADES.TIU, status: tiuStatus },
        { name: 'TKP', score: tkpScore, pg: PASSING_GRADES.TKP, status: tkpStatus },
    ];

    categories.forEach(cat => {
        const statusClass = cat.status ? 'text-green-600' : 'text-red-600';
        const statusText = cat.status ? 'Lulus' : 'Tidak Lulus';
        const row = `
            <div class="grid grid-cols-1 md:grid-cols-4 items-center p-4 text-gray-700">
                <div class="font-semibold">${cat.name}</div>
                <div class="font-bold text-lg">${cat.score}</div>
                <div>${cat.pg}</div>
                <div class="font-bold ${statusClass}">${statusText}</div>
            </div>
        `;
        scoreDetailsContainer.innerHTML += row;
    });

    document.getElementById('total-score').textContent = totalScore;
    updateRestartButtonStatus();
}

function updateRestartButtonStatus() {
    if (isGeneratingQuestions) {
        restartBtn.textContent = '🧠 Menyiapkan Soal Baru...';
        restartBtn.disabled = true;
        const checkInterval = setInterval(() => {
            if (!isGeneratingQuestions) {
                clearInterval(checkInterval);
                updateRestartButtonStatus(); // Re-check status after generation finishes
            }
        }, 1000);
    } else if (nextAiQuestions) {
        restartBtn.textContent = 'Coba Lagi (Soal Baru ✨)';
        restartBtn.disabled = false;
    } else {
        restartBtn.textContent = 'Ulangi Tryout';
        restartBtn.disabled = false;
    }
}


function restartTryout() {
    resultScreen.classList.add('opacity-0');
    setTimeout(() => {
        resultScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        welcomeScreen.classList.add('opacity-100');
        updateAiStatusOnWelcome();
    }, 500);
}

function updateAiStatusOnWelcome() {
     if (isGeneratingQuestions) {
        aiStatus.textContent = 'AI sedang menyiapkan soal baru di latar belakang...';
    } else if (nextAiQuestions) {
        aiStatus.textContent = 'Set soal baru dari AI telah siap untuk Anda!';
    } else {
        aiStatus.textContent = '';
    }
}

// --- GEMINI API INTEGRATION (MODIFIED FOR SECURITY) ---
async function prepareNextAiQuestions() {
    isGeneratingQuestions = true;
    console.log("Memulai pembuatan soal baru oleh AI...");
    updateAiStatusOnWelcome();

    const userQuery = `Buatkan 110 soal latihan Seleksi Kompetensi Dasar (SKD) CPNS yang baru dan unik dalam bahasa Indonesia. Jangan ulangi soal yang sudah ada. Komposisinya harus 30 soal TWK (Tes Wawasan Kebangsaan), 35 soal TIU (Tes Intelegensia Umum), dan 45 soal TKP (Tes Karakteristik Pribadi). Untuk TWK dan TIU, berikan satu jawaban benar. Untuk TKP, berikan 5 opsi jawaban dengan skor 1-5. Kembalikan respons dalam format JSON sesuai skema yang diberikan.`;
    
    const schema = { /* ... Skema JSON Anda tetap sama ... */ };
    
    const apiUrl = '/api/generate-questions'; // Mengarah ke serverless function kita

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: schema
        }
    };
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json(); // Selalu coba parse JSON

        if (!response.ok) {
            // ** INI BAGIAN PERBAIKAN UTAMA **
            const errorMessage = result.error || (result.candidates ? 'Request diblokir oleh Gemini.' : 'Kesalahan tidak diketahui.');
            throw new Error(errorMessage);
        }
        
        const jsonText = result.candidates?.[0].content.parts?.[0].text;
        
        if (!jsonText) throw new Error("Respons AI tidak berisi teks JSON.");

        const parsedQuestions = JSON.parse(jsonText);
        if (!Array.isArray(parsedQuestions) || parsedQuestions.length < 110) {
             throw new Error("Format JSON dari AI tidak valid atau jumlah soal kurang dari 110.");
        }
        
        nextAiQuestions = parsedQuestions.slice(0, 110);
        console.log(`Soal baru dari AI berhasil dibuat dan siap digunakan. Jumlah soal: ${nextAiQuestions.length}`);

    } catch (error) {
        console.error("Gagal membuat soal dari AI:", error.message);
        nextAiQuestions = null;
    } finally {
        isGeneratingQuestions = false;
        console.log("Proses pembuatan soal oleh AI selesai.");
        updateAiStatusOnWelcome();
        updateRestartButtonStatus(); // Tambahkan ini agar tombol update
    }
}

// Simple markdown to HTML converter
function simpleMarkdownToHtml(markdown) {
    // This is a very basic converter. For more complex needs, a library like 'marked' is recommended.
    return markdown
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code class="bg-gray-200 text-sm text-red-600 px-1 rounded">$1</code>')
        .replace(/^\s*-\s(.*)/gim, '<ul><li>$1</li></ul>') // Basic list
        .replace(/<\/ul>\s*<ul>/g, '') // Merge consecutive lists
        .replace(/\n/g, '<br>');
}


// script.js

async function getGeminiAnalysis() {
    getAnalysisBtn.disabled = true;
    getAnalysisBtn.textContent = '🧠 Menganalisis...';
    analysisContainer.classList.remove('hidden');
    analysisContainer.innerHTML = `
        <div class="flex items-center justify-center p-4">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-semibold">Harap tunggu, AI sedang menganalisis jawaban Anda...</span>
        </div>
    `;
    
    // ... (kode untuk menyiapkan incorrectTWKTIU dan lowScoreTKP tetap sama) ...

    const incorrectTWKTIU = [];
    const lowScoreTKP = [];

    QUESTIONS.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer === null) return;

        if (q.category === 'TWK' || q.category === 'TIU') {
            if (userAnswer !== q.answer) {
                incorrectTWKTIU.push({
                    category: q.category,
                    question: q.question,
                    userAnswer: userAnswer,
                    correctAnswer: q.answer
                });
            }
        } else if (q.category === 'TKP') {
            const selectedOption = q.options.find(opt => opt.text === userAnswer);
            if (selectedOption && selectedOption.score < 4) {
                lowScoreTKP.push({
                    question: q.question,
                    userAnswer: userAnswer,
                    score: selectedOption.score
                });
            }
        }
    });

    if (incorrectTWKTIU.length === 0 && lowScoreTKP.length === 0) {
        analysisContainer.innerHTML = '<p class="font-semibold text-green-600 text-center">Luar biasa! Semua jawaban Anda sudah sangat baik. Tidak ada analisis yang diperlukan saat ini. Pertahankan!</p>';
        getAnalysisBtn.textContent = '✨ Analisis Selesai';
        return;
    }

    let userQuery = `Seorang peserta baru saja menyelesaikan simulasi tryout SKD CPNS dengan hasil skor TWK=${lastScores.twkScore}, TIU=${lastScores.tiuScore}, TKP=${lastScores.tkpScore}. Berdasarkan data jawaban di bawah ini, berikan analisis dan pembahasan.`;

    if (incorrectTWKTIU.length > 0) {
        userQuery += `\n\n## Pembahasan Soal TWK & TIU yang Salah\nBerikan pembahasan yang jelas dan singkat untuk setiap soal berikut:\n`;
        incorrectTWKTIU.slice(0, 5).forEach((item, i) => {
            userQuery += `${i+1}. Soal (${item.category}): ${item.question}\n   - Jawaban Peserta: ${item.userAnswer}\n   - Jawaban Benar: ${item.correctAnswer}\n`;
        });
    }

    if (lowScoreTKP.length > 0) {
        userQuery += `\n\n## Analisis Karakteristik Pribadi (TKP)\nBerdasarkan jawaban dengan skor rendah berikut, berikan analisis singkat mengenai area karakteristik pribadi yang perlu dikembangkan. Berikan juga 2-3 saran praktis dan positif untuk perbaikan.\n`;
        lowScoreTKP.slice(0, 5).forEach((item, i) => {
             userQuery += `${i+1}. Soal: ${item.question}\n   - Jawaban Peserta (Skor ${item.score}): ${item.userAnswer}\n`;
        });
    }

    const systemPrompt = "Anda adalah seorang tutor ahli dan coach karir spesialis seleksi CPNS di Indonesia. Tugas Anda adalah memberikan analisis mendalam dan saran yang membangun berdasarkan jawaban pengguna. Gunakan bahasa Indonesia yang formal, jelas, dan memotivasi. Sapa pengguna dengan hangat di awal. Format seluruh jawaban Anda menggunakan Markdown agar mudah dibaca.";
    
    const apiUrl = '/api/get-analysis'; // Mengarah ke serverless function kita

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json(); // Selalu coba parse JSON

        if (!response.ok) {
            // ** INI BAGIAN PERBAIKAN UTAMA **
            // Cek pesan error dari serverless function atau dari Gemini
            const errorMessage = result.error || (result.candidates ? 'Request diblokir oleh Gemini, periksa prompt Anda.' : 'Terjadi kesalahan tidak diketahui.');
            throw new Error(errorMessage);
        }

        const candidate = result.candidates?.[0];

        if (candidate && candidate.content.parts?.[0].text) {
            const generatedText = candidate.content.parts[0].text;
            analysisContainer.innerHTML = simpleMarkdownToHtml(generatedText);
        } else {
             if (candidate && candidate.finishReason !== 'STOP') {
                throw new Error(`AI response stopped unexpectedly. Reason: ${candidate.finishReason}`);
             }
             if (result.promptFeedback && result.promptFeedback.blockReason) {
                throw new Error(`Request was blocked. Reason: ${result.promptFeedback.blockReason}`);
             }
             throw new Error("Respons dari AI tidak valid atau kosong.");
        }
        getAnalysisBtn.textContent = '✨ Analisis Selesai';

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // ** INI JUGA BAGIAN PERBAIKAN **
        analysisContainer.innerHTML = `<p class="text-red-600 font-semibold text-center">Maaf, terjadi kesalahan saat mencoba mendapatkan analisis: ${error.message}. Silakan coba lagi nanti.</p>`;
        getAnalysisBtn.textContent = '✨ Gagal, Coba Lagi';
        getAnalysisBtn.disabled = false;
    }
}


// --- EVENT LISTENERS ---
startBtn.addEventListener('click', startTryout);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
finishBtn.addEventListener('click', confirmFinish);
finishTryoutNavBtn.addEventListener('click', confirmFinish);
restartBtn.addEventListener('click', restartTryout);
getAnalysisBtn.addEventListener('click', getGeminiAnalysis);
