<!-- src/Shop.svelte -->

<script>
    import { onMount } from 'svelte';
</script>
  
<header>
    <div class="logo"></div>
    <nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
    </nav>
</header>
  
<main>
    <section class="products">
        <h1>Available Products</h1>
        <div class="product-grid">
            <!-- Example product cards -->
            <div class="product">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg" alt="Product 1" class="product-image" />
                <p class="price">$59.99</p>
                <button>Buy</button>
            </div>
            <div class="product">
                <img src="https://c.pxhere.com/photos/9b/2c/fashion_footwear_shoes-973087.jpg!d" alt="Product 2" class="product-image" />
                <p class="price">$39.99</p>
                <button>Buy</button>
            </div>
            <div class="product">
                <img src="https://media.cgtrader.com/variants/YiEnGraq7pXgf168cqXJpngw/64d1262c1acde2eb3beef249c4695a8ad88c958dd79db36f763bf631017addd0/02e68861-f990-4e2c-82f2-a57c080f8a65.jpg" alt="Product 3" class="product-image" />
                <p class="price">$29.99</p>
                <button>Buy</button>
            </div>
            <!-- Add more product items as needed -->
        </div>
    </section>
</main>
  
<style>
    :global(body) {
        background-color: #333;
        color: #f1f1f1;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #1a1a1a;
    }

    .logo {
        width: 100px;
        height: 30px;
        background-color: #e0e0e0;
        border-radius: 5px;
    }

    nav a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        margin-left: 1.5rem;
    }

    nav a:hover {
        text-decoration: underline;
    }

    main {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    .products {
        width: 100%;
        max-width: 1200px;
    }

    .products h1 {
        text-align: center;
        margin-bottom: 2rem;
    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .product {
        background-color: #444;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-image {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: cover;
        border-radius: 8px;
        background-color: #aaa;
        margin-bottom: 1rem;
    }

    .product .price {
        font-size: 1.2rem;
        color: #e0e0e0;
        margin: 0.5rem 0;
    }

    .product button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background-color: #555;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
    }

    .product button:hover {
        background-color: #666;
    }
</style>
