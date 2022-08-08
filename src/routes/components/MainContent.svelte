<script lang="ts">
    import {links} from '$lib/links'
    import Contact from './Contact.svelte';
    const contactInfo = {
        phone: '(631) 743-0728',
        email: 'anthony@anthonygabrieleactor.com'
    }
</script>

<container class="main-content">
<header>anthony gabriele</header>

<div class="contact">
<Contact></Contact>

<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
<p>{contactInfo.phone}</p>

<a href={links.reel}> reel</a> | <a href={links.resume}>resume</a>

</div>
</container>


<style>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.main-content {
    padding: 20px 20px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 150px;
}

a, p {
font-size: 1.5em;}

a {
    opacity: 0.5;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.693);
    transition: .5s;
}

a:hover {
    opacity: 1;
}


:root {
    font-family: Inter;
    /* width: 100%; */
    /* height: 100%; */
    /* margin: 0 0; */
}

p {font-size: x-large;}
header {font-size: xx-large;}
</style>