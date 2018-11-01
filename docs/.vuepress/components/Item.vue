<template>
    <div>
        <div style="display:inline-block">
            <img :src="src" :alt="alt" style="width:50px">
        </div>
        <div style="display:inline-block">
            <p>
            <span class="large">
                <a :href="href">{{header}}<OutboundLink /></a>
            </span>
            <br>
            <span>{{text}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["src", "alt", "href", "header", "text"]
}
</script>

