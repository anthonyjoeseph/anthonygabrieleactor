<script lang="ts">
    export let url: string
    export let style: string
</script>


<picture>
    <source srcset={url} type="" />
    <img src={url} style={style} alt="" />
</picture>