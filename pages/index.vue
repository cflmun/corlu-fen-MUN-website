<template>
    <div>
        <header id="header">
            <div class="container">
                <a href="#anasayfa" class="logo-area">
                    <!--<img src="/img/logo.png" alt="CFLMUN Logosu">-->
                    <span class="logo-text">CFLMUN'26</span>
                </a>

                <!-- Hamburger Menu Button -->
                <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav :class="{ active: isMenuOpen }">
                    <ul>
                        <li><a href="#Home" @click="closeMenu">Home Page</a></li>
                        <li><a href="#Schedule" @click="closeMenu">Schedule</a></li>
                        <li><a href="#Location" @click="closeMenu">Location</a></li>
                        <li><a href="#Committees" @click="closeMenu">Committees</a></li>
                        <li><a href="#Our Team" @click="closeMenu">Our Team</a></li>
                        <li><a href="#FAQ" @click="closeMenu">FAQ</a></li>
                        <li><a href="#Apply!" @click="closeMenu">Apply!</a></li>
                    </ul>
                </nav>
            </div>
        </header>


        <main>

            <section id="Main">
                <div class="slideshow-container">
                    <div class="slide fade">
                        
                    </div>
                </div>

                <div class="hero-content">
                    <h1>ANASAYFA BAŞLIK</h1>
                    <p>SLOGAN</p>
                    <p>METİN</p>
                    <a href="#menu" class="btn">DÜĞME</a>
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>

                <div class="dots-container">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                </div>
            </section>

            <section id="hakkimizda" class="page-section" style="background-color: var(--white-color);">
                <div class="container">
                    <h2 class="section-title">Hakkımızda</h2>
                    <div class="grid-2">
                        <div class="content-text">
                            <h3>PAGE</h3>
                            <p>METİN</p>
                        </div>
                        <div class="content-image">
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="false" id="tarihcemiz" class="page-section" style="background-color: var(--white-color);">
                <div class="container">
                    <h2 class="section-title">Tarihçemiz</h2>
                    <div class="grid-2">
                        <div class="content-image">
                            <!-- <img src="tarihcemiz.jpeg" alt="Geçmişten bir anı, börek ustası"> -->
                        </div>
                        <div class="content-text">
                            <h3>BAŞLIK</h3>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section id="iletisim" class="page-section">
                <div class="container">
                    <h2 class="section-title">Bize Ulaşın</h2>
                    <div class="contact-grid" style="display: flex; flex-wrap: wrap; gap: 40px;">
                        <!-- İletişim Bilgileri -->
                        <div style="flex: 1 1 400px;">
                            <h3>Informations</h3>
                            <p>---</p>
                            <ul>
                                <li><strong>AddresS:</strong> Zafer, Bülent Ecevit Blv. Pk:59860, 59000 Çorlu/Tekirdağ
                                </li>
                                <li><strong>Contact No:</strong> </li>
                                <li><strong>E-Mail:</strong> @gmail.com</li>
                            </ul>

                            <div style="margin-top: 25px;">

                                <div style="margin-top: 25px;">
                                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                                        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                                            style="display: flex; align-items: center;">
                                            <img src="/img/whatsapp-logo.png" alt="WhatsApp"
                                                style="height: 40px; width: 40px;">
                                        </a>
                                        <a href="https://www.instagram.com/cflmun" target="_blank"
                                            rel="noopener noreferrer" style="display: flex; align-items: center;">
                                            <img src="/img/instagram-logo.png" alt="Instagram"
                                                style="height: 40px; width: 40px;">
                                        </a>
                                    </div>

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6009.404172593118!2d27.829622173624834!3d41.1410290375045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4e1321f9a66c9%3A0xa025da8649180b79!2s%C3%87orlu%20%C4%B0mkb%20Fen%20Lisesi!5e0!3m2!1str!2str!4v1765385559195!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>

                            </div>
                        </div>

                        <!-- Form -->
                        <form class="contact-form" @submit.prevent="submitForm" style="flex: 1 1 400px;">
                            <h3>Mesaj Gönderin</h3>
                            <div class="form-group">
                                <input type="text" v-model="form.name" placeholder="Adınız Soyadınız" required>
                            </div>
                            <div class="form-group">
                                <input type="email" v-model="form.email" placeholder="E-posta Adresiniz" required>
                            </div>
                            <div class="form-group">
                                <textarea rows="5" v-model="form.message" placeholder="Mesajınız" required></textarea>
                            </div>
                            <button type="submit" class="btn" :disabled="isSubmitting">
                                {{ isSubmitting ? 'Gönderiliyor...' : 'Gönder' }}
                            </button>
                            <div v-if="submitMessage" class="submit-message" :class="submitStatus">
                                {{ submitMessage }}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { collection, addDoc } from "firebase/firestore";

const { $firebase } = useNuxtApp()

// Mobile menu state
const isMenuOpen = ref(false)

// Mobile menu functions
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
    isMenuOpen.value = false
}

// Slider için değişkenler
let slideIndex = ref(1)
let slideInterval = null

// index.vue -> <script setup> içine, diğer fonksiyonların yanına ekleyin

async function setReviewsContainerHeight() {
    // DOM'un tamamen hazır olduğundan emin oluyoruz
    await nextTick();

    const container = document.querySelector('.reviews-slideshow-container');
    if (!container) return;

    const slides = container.querySelectorAll('.reviews-slide');
    if (slides.length === 0) return;

    let maxHeight = 0;

    // En yüksek slaytı bulmak için tüm slaytları geziyoruz
    slides.forEach(slide => {
        // Ölçüm yapabilmek için slaytı geçici olarak görünür yapıyoruz
        const originalDisplay = slide.style.display;
        slide.style.display = 'block';

        // Yüksekliğini ölçüyoruz
        if (slide.offsetHeight > maxHeight) {
            maxHeight = slide.offsetHeight;
        }

        // Orijinal display durumuna geri getiriyoruz
        slide.style.display = originalDisplay;
    });

    // Bulduğumuz en yüksek değeri container'a min-height olarak atıyoruz
    if (maxHeight > 0) {
        container.style.minHeight = `${maxHeight}px`;
    }

    // Son olarak, doğru slaydın görünür olduğundan emin oluyoruz
    showReviewsSlides(reviewsSlideIndex.value);
}

// Form için mevcut kodlar
const form = ref({
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

// Slider fonksiyonları
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex.value = 1 }
    if (n < 1) { slideIndex.value = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (slides[slideIndex.value - 1]) {
        slides[slideIndex.value - 1].style.display = "block";
    }

    if (dots[slideIndex.value - 1]) {
        dots[slideIndex.value - 1].classList.add("active");
    }
}

function plusSlides(n) {
    showSlides(slideIndex.value += n);
    resetInterval();
}

function currentSlide(n) {
    showSlides(slideIndex.value = n);
    resetInterval();
}

function nextSlide() {
    slideIndex.value++;
    showSlides(slideIndex.value);
}

function resetInterval() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, 5000); // 5 saniyede bir otomatik geçiş
}


// Yorumlar Slider için değişkenler
let reviewsSlideIndex = ref(1);
let reviewsSlideInterval = null;

// Yorumlar Slider fonksiyonları
function showReviewsSlides(n) {
    const slides = document.getElementsByClassName("reviews-slide");
    const dots = document.getElementsByClassName("reviews-dot");

    if (n > slides.length) { reviewsSlideIndex.value = 1 }
    if (n < 1) { reviewsSlideIndex.value = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[reviewsSlideIndex.value - 1]) {
        slides[reviewsSlideIndex.value - 1].style.display = "block";
    }

    if (dots[reviewsSlideIndex.value - 1]) {
        dots[reviewsSlideIndex.value - 1].className += " active";
    }
}

function plusReviewsSlides(n) {
    showReviewsSlides(reviewsSlideIndex.value += n);
    resetReviewsInterval();
}

function currentReviewsSlide(n) {
    showReviewsSlides(reviewsSlideIndex.value = n);
    resetReviewsInterval();
}

function nextReviewsSlide() {
    reviewsSlideIndex.value++;
    showReviewsSlides(reviewsSlideIndex.value);
}

function resetReviewsInterval() {
    if (reviewsSlideInterval) {
        clearInterval(reviewsSlideInterval);
    }
    reviewsSlideInterval = setInterval(nextReviewsSlide, 5000); // 5 saniyede bir otomatik geçiş
}

// --- LIFECYCLE HOOKS (Yaşam Döngüsü) ---

// Tüm kodlar tek bir onMounted bloğunda birleştirildi.
onMounted(() => {
    // Ana slider'ı başlat
    showSlides(slideIndex.value);
    resetInterval(); // setInterval'ı resetInterval içinde zaten yapıyoruz.
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;

    // Yorumlar slider'ını başlat
    showReviewsSlides(reviewsSlideIndex.value);
    resetReviewsInterval();

    // Yorumlar bölümünün yüksekliğini ayarla
    setReviewsContainerHeight();

    // Pencere yeniden boyutlandırıldığında yüksekliği tekrar hesapla
    window.addEventListener('resize', setReviewsContainerHeight);
});

// Tüm kodlar tek bir onUnmounted bloğunda birleştirildi.
onUnmounted(() => {
    if (slideInterval) clearInterval(slideInterval);
    if (reviewsSlideInterval) clearInterval(reviewsSlideInterval);

    // Event listener'ı temizle
    window.removeEventListener('resize', setReviewsContainerHeight);
});


// Form submit fonksiyonu
async function submitForm() {
    if (!form.value.name || !form.value.email || !form.value.message) {
        submitMessage.value = 'Lütfen tüm alanları doldurun.';
        submitStatus.value = 'error';
        return;
    }

    isSubmitting.value = true;

    try {
        const docRef = await addDoc(collection($firebase.db, "messages"), {
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
            timestamp: new Date()
        });

        console.log("Document written with ID: ", docRef.id);
        submitMessage.value = 'Mesajınız başarıyla gönderildi!';
        submitStatus.value = 'success';

        // Formu temizle
        form.value.name = '';
        form.value.email = '';
        form.value.message = '';
    } catch (e) {
        console.error("Error adding document: ", e);
        submitMessage.value = 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
        submitStatus.value = 'error';
    } finally {
        isSubmitting.value = false;
    }
}

// SEO meta tags
useSeoMeta({
    title: 'ÇFLMUN-1 - Çorlu Fen High School Model United Nations',
    ogTitle: 'ÇFLMUN-2 - Çorlu Fen High School Model United Nations',
    description: 'des-1',
    ogDescription: 'des-2',
    ogImage: '/og-image.jpeg',
    twitterCard: 'summary_large_image',
})

// Favicon ekle
useHead({
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
    ]
})
</script>