import bus from "@/utils/bus";

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('GET_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 500);
    },
}
