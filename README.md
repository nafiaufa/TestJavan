# EC-Nafiaufa TestJavan

Aplikasi ini digunakan untuk melakukan pencatatan aset yang dimiliki oleh keluarga. Aplikasi ini terdiri dari beberapa fitur, antara lain:

- Menambahkan data orang baru ke keluarga
- Mengedit data orang dalam keluarga
- Menghapus data orang dalam keluarga
- Menambah data aset keluarga
- Mengedit data aset keluarga
- Menghapus data aset keluarga
- Menambahkan aset yang dimiliki oleh seseorang
- Mengurangi asset yang dimiliki oleh seseorang
- Menampilkan total nilai (price) aset yang dimiliki oleh masing-masing orang dalam suatu keluarga berdasarkan data harga produk di api produk berikut https://dummyjson.com/docs/products

## Instalasi

Untuk menggunakan aplikasi ini, Anda perlu menginstall dependensi yang dibutuhkan dengan menjalankan perintah `npm install` di terminal.
Buat database mysql dengan nama `ec-nafi-javan`

## Penggunaan

Untuk menjalankan aplikasi ini, Anda dapat menjalankan perintah `npm start` lalu `npx sequelize-cli db:seed:all` di terminal. Aplikasi ini akan tersedia di http://localhost:3000.


## Endpoint

| Endpoint                                        | HTTP Method | Deskripsi                                                                                                                                     |
| ----------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| /addPerson                                      | POST        | Menambahkan data orang baru ke keluarga                                                                                                       |
| /editPerson/:id_anggota                         | PUT         | Mengedit data orang dalam keluarga                                                                                                            |
| /deletePerson/:id_anggota                       | DELETE      | Menghapus data orang dalam keluarga                                                                                                           |
| /addAsset                                       | POST        | Menambah data aset keluarga                                                                                                                   |
| /editAsset/:id_aset                             | PUT         | Mengedit data aset keluarga                                                                                                                   |
| /deleteAsset/:id_aset                           | DELETE      | Menghapus data aset keluarga                                                                                                                  |
| /addAssetToPerson                               | POST        | Menambahkan aset yang dimiliki oleh seseorang dalam keluarga                                                                                  |
| /removeAssetFromPerson/:id_aset                 | DELETE      | Mengurangi asset yang dimiliki oleh seseorang dalam keluarga                                                                                  |
| /getTotalAssetValuePerPerson/:id_keluarga_kecil | GET         | Menampilkan total nilai (price) aset yang dimiliki oleh masing-masing orang dalam suatu keluarga berdasarkan data harga product di api produk |

## Contoh Penggunaan
Berikut ini adalah contoh penggunaan lengkap aplikasi menggunakan tool Postman:

## Menambahkan data keluarga besar
Request:
```bash
POST /addPerson
Content-Type: application/json

{
    "nama_anggota": "John Doe"
}
```
Response:
```bash
{
    "status": "success",
    "message": "Data orang berhasil ditambahkan",
    "data": {
        "id_anggota": 1,
        "nama_anggota": "John Doe"
    }
}
```
## Mengedit data orang dalam keluarga
Request:
```bash
PUT /editPerson/1
Content-Type: application/json

{
    "nama_anggota": "Jane Doe"
}
```
Response:
```bash
{
    "status": "success",
    "message": "Data orang berhasil diupdate",
    "data": {
        "id_anggota": 1,
        "nama_anggota": "Jane Doe"
    }
}
```
## Menghapus data orang dalam keluarga
Request:
```bash
DELETE /deletePerson/1
```
Response:
```bash
{
    "status": "success",
    "message": "Data orang berhasil dihapus"
}
```

## Dokumentasi Selanjutnya
Untuk dokumentasi lebih lanjut mengenai penggunaan aplikasi ini,silakan membaca dokumentasi endpoint yang tersedia di aplikasi ini.

## Kontribusi
Jika Anda ingin berkontribusi pada aplikasi ini, silakan membuat pull request di repository ini. Kontribusi Anda sangat dihargai.

## Terima kasih
Terima kasih telah menggunakan aplikasi ini. Semoga bermanfaat bagi Anda.

