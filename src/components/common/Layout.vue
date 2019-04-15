<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #f4b1df;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .menu-item .ivu-menu-item{
    color: darkgray;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .layout-logo{
    width: 200px;
    height: 50px;
    /*background: white;*/
    border-radius: 3px;
    float: right;
    position: relative;
    top: 5px;
    right: 20px;
    text-align: center;
    background: url("../../assets/logo.png");
    background-size: 200px 50px;
  }

</style>
<template>
  <div class="layout">
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon @click.native="collapsedSider" color="white" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        <a style="color: white">退出登录</a>
        <div class="layout-logo" ></div>
      </Header>
      <Layout :style="{minHeight: '100vh'}">
        <Sider :style="{background: '#fff'}"  breakpoint="md" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" theme="light" >
          <Menu active-name="1-1" theme="light" width="auto" :class="menuitemClasses">
            <router-link to="/manage/page1">
              <MenuItem name="1-1">
                  <Icon type="ios-navigate"></Icon>
                  <span>Option 1</span>
              </MenuItem>
            </router-link>
            <router-link to="/manage/page2">
              <MenuItem name="1-2">
                  <Icon type="ios-search"></Icon>
                  <span>Option 2</span>
              </MenuItem>
            </router-link>
            <router-link to="/manage/page3">
              <MenuItem name="1-3">
                <Icon type="ios-settings"></Icon>
                <span>Option 3</span>
              </MenuItem>
            </router-link>
          </Menu>
        </Sider>
        <Layout :style="{background: '#fff'}">
          <!--<Header :style="{padding: 0}" class="layout-header-bar">-->
            <!--<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>-->
          <!--</Header>-->
          <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>

  </div>
</template>
<script>
  export default {

    data () {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      }
    }
  }
</script>
