<template>
    <div class="More">
        <Button ghost shape="circle" type="primary" :loading="loading" @click="Exit">
            <span v-if="!loading">退出登录!</span>
            <span v-else>Loading...</span>
        </Button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        }
    },

    mounted() {
        
    },

    methods: {
        Exit() { //退出登录
          this.loading = true;
          this.$Modal.confirm({
            title: '退出操作',
            content: '<p>确认退出吗?</p>',
            okText: 'OK',
            cancelText: 'Cancel',
            onOk: () => {
              this.loading = false;
              this.$Message.success('退出成功');
              this.$router.push('/login')
              sessionStorage.removeItem('User');
            },
            onCancel: () => {
              this.loading = false;
              this.$Message.info('取消退出');
            }
          })
        }
    },
}
</script>
<style lang="less">
.More {
    text-align: initial;
}
</style>