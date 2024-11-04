<!-- src/App.svelte -->

<script>
    import { onMount } from 'svelte';
</script>
  
<header>
    <div class="header-content">
        <div class="logo">
            <img src="/stlogo.png" alt="StudTechLogo">
        </div>
        <nav>
            <a href="/project2/">Home</a>
            <a href="/project2/shop">Shop</a>
            <a href="/project2/contact">Contact</a>
        </nav>
    </div>
</header>
  

<section class="content">
    <div class="container">
        <div class="text">
            <p>StudTech is a cutting-edge educational technology company dedicated to enhancing
            the learning experience for students and educators alike. We develop innovative tools and platforms
            that empower learners to engage with their studies in interactive and meaningful ways. With a focus
            on accessibility and usability, our products are designed to meet the diverse needs of today's
            learners, fostering a love for education and lifelong learning. At StudTech, we believe in transforming
            the educational landscape by bridging the gap between technology and learning, making education
            more effective, engaging, and enjoyable for all.</p>
        </div>
    </div>
 </section>
 

  
 <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

    :global(body) {
        background: linear-gradient(to right, #1a1a1a 30%, rgba(51, 51, 51, 0.5) 70%),
                    url('/shoesbg.jpg') no-repeat center right;
        background-size: cover;
        color: #f1f1f1;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
        background-color: rgba(68, 68, 68, 0.8);
        line-height: 1.7;
        letter-spacing: 0.02em;
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
        display: flex;
        width: 110px;
        max-height: 60px;
    }

    .logo img {
        width: 120%;
        height: auto;
        margin-top: -10px;
    }

    nav {
        display: flex;
        gap: 2rem;
    }

    nav a {
        color: #e0e0e0;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
    }

    nav a:hover {
        text-decoration: underline;
        color: #ffbf00;
    }

    .content {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        max-width: 800px;
        width: 100%;
        padding: 2rem;
    }

    .container {
    background-color: rgba(255, 255, 255, 0.15);
    padding: 2rem 2.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Ensure this transition includes transform */
}

.container:hover {
    transform: scale(1.05) translateY(-10px); /* Apply both scale and translate for hover effect */
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5); /* Enhanced shadow for depth */
}



    /* Keyframes for fade-in */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .text {
        font-size: 1.1rem;
        line-height: 1.75;
        color: #f1f1f1;
        letter-spacing: 0.03em;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .text p {
        margin: 0;
        font-weight: 300;
    }
</style>
