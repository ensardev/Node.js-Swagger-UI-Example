# Node.js Swagger UI Örneği
Bu proje, Node.js ve Swagger UI kullanarak basit bir API uygulamasının örneğini içermektedir. JSON Server kullanarak bir veritabanı oluşturulmuş ve Swagger UI ile API belgeleri sağlanmıştır. Bu örnek, kullanıcıları listelemek, yeni kullanıcı eklemek ve kullanıcıları silmek için GET, POST ve DELETE metodlarını içermektedir.

Konu hakkında ki blog yazım : [API Dokümantasyonu İçin Swagger UI Ve Node.js İle Kullanımı](https://ensar.dev/API-Dokumantasyonu-Icin-Swagger-UI)

## Başlarken
Aşağıdaki adımları izleyerek bu projeyi yerel bir ortamda çalıştırabilirsiniz.

### Gereksinimler
Bu projeyi çalıştırmak için aşağıdaki gereksinimlere ihtiyacınız vardır:

- Node.js
- npm (Node Package Manager)

### Kurulum

1. Bu depoyu klonlayın veya ZIP olarak indirin.
	
	```bash
	git clone https://github.com/ensardev/Node.js-Swagger-UI-Example.git
	```

2. Proje dizinine gidin:

	  ```bash
   cd nodejs-swagger-ui-example
   ```

3. Gerekli paketleri yüklemek için aşağıdaki komutu çalıştırın:

	  ```bash
   npm install
   ```

4. Örneği başlatmak için aşağıdaki komutu çalıştırın:

   ```bash
   node index.js
   ```

6. Tarayıcınızda Swagger UI'ı görmek için aşağıdaki URL'yi ziyaret edin:

   ```
   http://localhost:3000/api-docs
   ```

## Kullanım

Swagger UI sayfasında API belgelerini görebilir ve GET, POST ve DELETE metodlarını test edebilirsiniz.

- **GET**: Tüm kullanıcıları almak için "/api/users" yolu kullanılır.
- **GET**: Belirli bir kullanıcıyı almak için "/api/users/{id}" yolu kullanılır.
- **POST**: Yeni bir kullanıcı eklemek için "/api/users" yolu kullanılır. İstekte "id", "name" ve "email" alanları bulunmalıdır.
- **DELETE**: Belirli bir kullanıcıyı silmek için "/api/users/{id}" yolu kullanılır. "{id}" parametresi, silinecek kullanıcının ID'sini temsil eder.

## Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasını inceleyebilirsiniz.
