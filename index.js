window.onload = function() {
    showTab('floral');
};

function changeTab() {
    var selectedValue = document.getElementById("Tab").value;
    showTab(selectedValue);

}

function showTab(tabName) {

    // Menyembunyikan semua daftar produk
    var productLists = document.querySelectorAll('.product-list');
    productLists.forEach(function(productList) {
        productList.classList.add('hidden');
    });

    // Menampilkan daftar produk untuk tab yang dipilih
    var selectedProductList = document.getElementById(tabName + "-products");
    selectedProductList.classList.remove('hidden');

    var productSelect = document.getElementById("Tab");
    productSelect.focus();

    var tabs = document.querySelectorAll('nav a');
    tabs.forEach(function(tab) {
        tab.classList.remove('bg-gray-200', 'text-gray-900');
        tab.classList.add('text-gray-500');
    });

    // Tambahkan kelas 'bg-gray-200 text-gray-900' ke tab yang dipilih
    var selectedTab = document.getElementById(tabId + '-tab');
    selectedTab.classList.add('bg-gray-200', 'text-gray-900');
    selectedTab.classList.remove('text-gray-500');


}
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.addEventListener('click', () => {
        if (carousel.scrollLeft === 0) {
            // Jika sudah di awal, scroll ke akhir
            carousel.scrollTo({
                left: carousel.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            // Scroll ke kiri
            carousel.scrollBy({
                left: -300, // Jumlah piksel untuk menggulir ke kiri
                behavior: 'smooth'
            });
        }
    });

    nextButton.addEventListener('click', () => {
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
            // Jika sudah di akhir, scroll ke awal
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll ke kanan
            carousel.scrollBy({
                left: 300, // Jumlah piksel untuk menggulir ke kanan
                behavior: 'smooth'
            });
        }
    });
});





