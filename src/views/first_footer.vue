<template>
<div>
    <v-row>
        <v-col cols=8 style="position: relative;">
            <v-img id="left_bottom_corner" contain src="@/assets/left_corner.png">

            </v-img>
        </v-col>
        <v-col cols=4>
            <v-img contain id="right_bottom_corner" src="@/assets/right_star.png">

            </v-img>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    name: 'first_footer',
    data() {
        return {

        };
    },
    created() {

    },
    computed: {

    }
}
</script>

<style>
#left_bottom_corner {
    height: 100%;
    float: left;
    position: absolute;
    bottom:-40px;
   
}

#right_bottom_corner {
    height: 100%;
    float: right;

}
</style>
