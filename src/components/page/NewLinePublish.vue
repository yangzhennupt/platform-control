<template>
    <div id="newLineMap">
        <baidu-map class="bm-view"  :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true" @ready="handler">
            <!-- 点 -->
            <bm-marker :position="{lng: 116.405, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
            <!-- 地图右键菜单 -->
             <bm-context-menu>
                <bm-context-menu-item :callback="gotoBeijing" text="去北京"></bm-context-menu-item>              
            </bm-context-menu>
        </baidu-map>
    </div>  
</template>

<script>

export default {
    data(){
        return{
            stations:[]
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
        },
        gotoBeijing (e) {
            console.log(e.point.lng);
            console.log(e.point.lat);
            this.stations.push({
                poiont:{
                    lng:e.point.lng,
                    lat:e.point.lat
                }
            })    
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