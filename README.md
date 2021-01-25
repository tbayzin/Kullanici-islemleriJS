# :fire:  JS 2020 OCAK PROJESI DOKUMANTASYONU   :boom:

# Projenin Amacı
 Projenin temel amacı öğrencilere Javascript dilinin HTML,CSS ile birlikte kullanımını öğretmek ve front-end işleri yapılabilme yetisi kazandırılmasıdır.

  Proje detayları aşağıdaki başlıklarda listelenmiştir.  

# Projenin Konusu  :orange_book:

Kullanıcılar tarafından kişilerin eklenebileceği, listelenebileceği ve kişilerin güncellenebileceği bir kişi listesi. Burada önemli olan Javascript bilgimizin gelişmesi ve aynı zamanda projelerde frontend işlerini yapacağımız için görselliğe önem vermemizi sağlamak.


Projenin asıl konusu yukarıdaki gibi olmakla beraber bu amaca önceden belirlenen mini projeler yardımıyla ulaşılacaktır.
Bahsi geçen projelere Proje Materyalleri kısmında göz atılabilir.


# Proje Kapsamı   :book:

Proje kapsamında yapılacak işlerin detayı aşağıdaki gibidir;

Kullanıcılar tarafından gerekli bilgiler(ad,soyad, telefon, fotoğraf vb) girilerek kişiler eklenebilecek, eklenen kişiler istenilen sıraya göre listelenebilecek, silinebilecek ve güncellenebilecek. Aynı zamanda bu bilgiler bir dosya üzerine yazdırılacak.

 Yukarıda bahsi geçen işin asıl amaçlarından birinin front-end olduğu için tasarıma dikkat edilmesi.
 
 ## **1.** Sayfa: Kullanıcı Ekleme 

  **Kullanıcıdan alınacak inputlar:**

   - Ad
   - Soyad
   - E-mail
   - Telefon numarası
   - Doğum Tarihi
   - Fotoğraflar

  **NOT:** Fotoğraflardan biri kapak fotoğrafı olmalı
   
 ## **2.** Sayfa: Kullanıcı Listeleme ve Arama
  
  **Listeleme:**

  - Ad 
  - Soyad 
  - E-mail
  - Telefon numarası
  - Doğum Tarihi
  - Fotoğraf
    
  **Arama:**
  - Ad ve soyad parametrelerine göre arama
   
## **3.** Sayfa: Kullanıcı Düzenleme Sayfası
 
  - Düzenleme butonu: düzenleme yapabilme özelliği aktifleşiyor. 
  - Kaydet butonu: yapılan değişikleri kaydediyor. 
  - İptale butonu: kaydetmeden geri dönüyor.
   
## **4.** Sayfa Görüntü Sorgulama:
   - Kullanıcı tarafından bir görsel eklenir sistemde bulunan ve eşlenen şahıs ekrana bastırılır. Ekrana bastırılan şahsın bilgileri küçük bir modal içinde gösterilir.

  **Kişi fotoğrafı yüklenirken:**
    
  - Fotoğrafın base64'ü çıkarılır.
  - Bu base64'un md5 hashi oluşturulur.
  - Bu veriler local storage kaydedilir.
    
  **Sorgulama yapılırken:**
   
  - Fotoğraf yüklenir
  - Fotoğrafın base64'ü çıkarılır.
  - Bu base64'un md5 hashi oluşturulur.
  - Bu md5 hash ile local storagedeki hashler karşılaştırılarak sonuç bulunur
  - Arayüzde gösterilir.
    
# Proje Materyalleri  :wrench:

**Programlama Dilleri:**  Javascript,HTML,CSS  

**Frameworkler:**  Vue.js

**Kütüphaneler:** Bootstrap4, vuetify

# Projenin İçine Eklenecek Özellikler İçin Örnek Projeler

**1- Progress Steps**

Veri eklerken kullanılacak olan işlem süreci temsilcisi

Link: https://50projects50days.com/projects/progress-steps/

[Sena'nın Reposu İçin Tıklayınız.](https://github.com/akpiinar/progress-step)

[Tarık Repo](https://github.com/tbayzin/Progress-stepsJS)

**2- Hidden Search Widget**

Kişi listesinde kullanılacak arama widgeti.

Link:  https://50projects50days.com/projects/hidden-search-widget/
[Sena'nın reposu için Tıklayınız](https://github.com/akpinar/hidden-search.git)


**3- Blurry Loading**

Sayfa ilk yüklendiğinde kullanılacak olan loading göstergesi.

Link:  https://50projects50days.com/projects/blurry-loading/


**4- Event KeyCodes**

Veri ekleme formlarında entera basılırsa bilgilerin post edilmesi.


Link:  https://50projects50days.com/projects/event-keycodes/

**5- Animated Navigation**

Şık bir menü tasarımı. Henüz nerede kullanılacağı kesinleştirilmedi.

Link:  https://50projects50days.com/projects/animated-navigation/

**6- Drag N Drop**

Drag and Drop şeklinde kişi listesinin elle sıralanması.

Link: https://50projects50days.com/projects/drag-n-drop/

**7- Content Placeholder**

Sayfa içi veri yüklerken kullanılacak loading widgeti.

Link: https://50projects50days.com/projects/content-placeholder/

**8- Toast Notification**

Veri ekleyip çekerken kullanılacak olan kullanıcı bilgilendirme notification tasarımı.

Link: https://50projects50days.com/projects/toast-notification/

**9- Live User Filter**

Kişi arama sonuçlarını şık şekilde getirecek widget.

Veri eklerken kullanılacak olan işlem süreci temsilcisi

Link:  https://50projects50days.com/projects/live-user-filter/

**10- Custom Range Slider**

Kişi yaşını belirlemek için kullanılabilecek slider.

Link:  https://50projects50days.com/projects/custom-range-slider/

**11- Palindrome Number**

[Sena'nın reposu için tıklayınız.](https://github.com/akpiinar/javascript-palindrome-number)

[Tarık repo ](https://github.com/tbayzin/palindrome)



### **Not**: Saadettin reiz bu dökümanda değişiklik yapma hakkını saklı tutar.

