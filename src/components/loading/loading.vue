<template>
  <div class="loading__contaienr" v-show="loadingStatus">
    <div class="loading__mask"></div>
    <div class="loading__box">
      <div class="loading__icon"></div>
      <div class="loading__text">加载中</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState(['loadingStatus']),
	},
};
</script>
<style scoped>
.loading__contaienr {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999999;
}
.loading__mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
}
.loading__box {
	width: 100px; /* no */
	height: 100px; /* no */
	background: #fff;
	color: #000;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	box-shadow: 5px 5px 20px #000;
}
.loading__icon {
	width: 40px; /* no */
	height: 40px; /* no */
	border: 3px solid #ddd;
	border-left-color: #058f88;
	border-radius: 50%;
	margin-bottom: 10px; /* no */
	animation: rotate 1s infinite linear;
}
@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}
</style>
