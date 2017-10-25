<template>
    <div>
        <ul>
            <li v-for="item in list">{{item.value}}
                <sample-comp v-if="item.children" :list="item.children"></sample-comp>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                msg:"this is child sample-comp MSG"
            }
        },
        name: 'sample-comp',
        methods: {

        },
        props: ['list']
    }
</script>