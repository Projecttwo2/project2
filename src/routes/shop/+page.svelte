<script>
    // @ts-nocheck
    
        import { onMount } from 'svelte';
        let showForm = false;
        let selectedProduct = {};
    
        /**
       * @param {{ id?: number; name?: string; price?: number; image?: string; }} product
       */
        function buyProduct(product) {
            selectedProduct = product;
            showForm = true;
        }
    
        function closeForm() {
            showForm = false;
            selectedProduct = {};
        }
    </script>
    
    <header>
        <div class="logo"></div>
        <nav>
            <a href="/project2/">Home</a>
            <a href="/project2/shop">Shop</a>
            <a href="/project2/contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section class="products">
            <h1>Available Products</h1>
            <div class="product-grid">
                <!-- Example product cards -->
                {#each [
                    { id: 1, name: "Product 1", price: 59.99, image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg" },
                    { id: 2, name: "Product 2", price: 39.99, image: "https://c.pxhere.com/photos/9b/2c/fashion_footwear_shoes-973087.jpg!d" },
                    { id: 3, name: "Product 3", price: 29.99, image: "https://media.cgtrader.com/variants/YiEnGraq7pXgf168cqXJpngw/64d1262c1acde2eb3beef249c4695a8ad88c958dd79db36f763bf631017addd0/02e68861-f990-4e2c-82f2-a57c080f8a65.jpg" }
                ] as product}
                <div class="product">
                    <img src={product.image} alt={product.name} class="product-image" />
                    <p class="price">${product.price.toFixed(2)}</p>
                    <div class="quantity-control">
                        <button class="decrease">-</button>
                        <input type="number" value="1" min="1" class="quantity-input" />
                        <button class="increase">+</button>
                    </div>
                    <button on:click={() => buyProduct(product)}>Buy</button>
                </div>
                {/each}
            </div>
        </section>
    
        {#if showForm}
        <div class="purchase-form">
            <h2>Purchase {selectedProduct.name}</h2>
            <form on:submit|preventDefault={closeForm}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
        
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
    
                <div class="form-group">
                    <label for="location">Location:</label>
                    <input type="text" id="location" required />
                </div>
        
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Your Phone Number" required />
                </div>
    
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" placeholder="Your Message" required></textarea>
                </div>
        
                <div class="form-actions">
                    <button type="submit">Submit</button>
                    <button type="button" on:click={closeForm}>Cancel</button>
                </div>
            </form>
        </div>
        {/if}
        
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
        background-color: rgba(26, 26, 26, 0.9);
        padding: 1.5rem 3rem;
        font-weight: 500;
        letter-spacing: 0.6px;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
      width: 100px;
      height: 30px;
      background-color: #e0e0e0;
      border-radius: 5px;
    }
  

    nav {
        display: flex;
        gap: 2rem;
        margin-left:1450px;
    }

    nav a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        margin-left: 1.5rem;
        transition: color 0.2s ease;
        margin-top:-30px;
    }

    nav a:hover {
        text-decoration: underline;
        color: #ffbf00;
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
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
        }
    
        .product {
            background-color: #444;
            border-radius: 8px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 350px; /* Fixed height to keep product boxes uniform */
        }
    
        .product-image {
            width: 100%;
            height: auto;
            max-height: 150px; /* Limit height of images */
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
    
        .quantity-control {
            display: flex;
            align-items: center;
            margin: 1rem 0;
        }
    
        .quantity-control button {
            padding: 0.5rem;
            border: none;
            border-radius: 5px;
            background-color: #555;
            color: #fff;
            cursor: pointer;
            font-weight: bold;
        }
    
        .quantity-control button:hover {
            background-color: #666;
        }
    
        .quantity-input {
            width: 50px;
            text-align: center;
            margin: 0 0.5rem;
            border: 1px solid #555;
            border-radius: 5px;
            background-color: #666;
            color: #fff;
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
    
        .purchase-form {
        background-color: #444;
        padding: 2rem;
        border-radius: 8px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        width: 90%; /* Adjust width as needed */
        max-width: 400px; /* Set a max width for larger screens */
    }
    
    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem; /* Space between inputs */
    }
    
    .form-group label {
        margin-bottom: 0.5rem;
        color: #e0e0e0;
    }
    
    .form-group input {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #555;
        background-color: #666;
        color: #fff;
        flex: 1; /* Allow input to fill available space */
    }
    
    .form-actions {
        display: flex;
        justify-content: space-between; /* Space between buttons */
    }
    
    .purchase-form button {
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        background-color: #555;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        flex: 1; /* Make buttons take equal space */
        margin-right: 0.5rem; /* Space between buttons */
    }
    
    .purchase-form button:last-child {
        margin-right: 0; /* Remove margin from the last button */
    }
    
    .purchase-form button:hover {
        background-color: #666;
    }
    
    </style>