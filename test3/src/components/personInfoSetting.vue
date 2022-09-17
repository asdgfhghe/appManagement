<template>
    <div id="personInfoSetting">
        <personInfo></personInfo>
        <personInfoAlter></personInfoAlter>
    </div>
</template>
<script>
import personInfo from "./personInfo.vue";
import personInfoAlter from "./personInfoAlter.vue";

export default {
    name: 'personInfoSetting',
    components: {
        personInfo,
        personInfoAlter,
    }
}
</script>
