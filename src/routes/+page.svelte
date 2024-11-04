<!-- src/App.svelte -->

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
    <section class="content">
        <div class="text">
            <p>StudTech is a cutting-edge educational technology company dedicated to enhancing</p>
            <p>the learning experience for students and educators alike. We develop innovative tools and platforms</p>
            <p>that empower learners to engage with their studies in interactive and meaningful ways. With a focus</p>
            <p>on accessibility and usability, our products are designed to meet the diverse needs of today's</p>
            <p>learners, fostering a love for education and lifelong learning. At StudTech, we believe in transforming</p>
            <p>the educational landscape by bridging the gap between technology and learning, making education</p>
            <p>more effective, engaging, and enjoyable for all.</p>
        </div>
        <div class="image-placeholder">      
            <img src="https://i.pinimg.com/originals/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg" alt="Project" />
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

    .content {
        display: flex;
        max-width: 800px;
        width: 100%;
        gap: 2rem;
    }

    .text {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .text p {
        margin: 0;
        background-color: #444;
        height: auto; /* Changed to auto to fit text */
        padding: 0.5rem; /* Added padding for better appearance */
        border-radius: 4px;
    }

    .image-placeholder {
        flex: 1;
        background-color: #aaa;
        border-radius: 8px;
        min-width: 150px;
        min-height: 200px;
    }
</style>
