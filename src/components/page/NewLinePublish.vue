<template>
    <div id="newLineMap">
        <baidu-map class="bm-view" ak="5SEWFRRyhHCR6tXL5LROUPWqD6B5FCGC" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true" @ready="handler">
            <bm-marker :position="{lng: 116.405, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
        </baidu-map>
    </div>  
</template>

<script>
import {BaiduMap} from 'vue-baidu-map';
export default {
    components: {
        BaiduMap
    },
    data(){
        return{

        }
    },
    created(){
        
    },
    computed:{
        
    },
    methods:{
        handler ({BMap, map}) {
            this.location = this.location;
            this.center = this.center;
            this.zoom = 15;
        }
    }
}    
</script>
<style scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>