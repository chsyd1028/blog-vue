<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem >用户管理</BreadcrumbItem>
    </Breadcrumb>
    <Divider />

    <Row>
      <Button icon="md-add" type="primary">添加</Button>
    </Row>

    <Table size="default" :columns="columns7" :data="data6" style="margin-top: 20px"></Table>
    <Page style="margin-top: 20px"
          :total="total" :page-size="pageSize" :page-size-opts="pageSizeOpts"
          show-total show-sizer
          @on-change="changePage" @on-page-size-change="changeSize"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns7: [ //这里是table的头设置
          {
            title: '名字',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.name)
              ]);
            }
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'default',
                    size: 'small',
                  },
                  style: {
                    marginRight: '5px',
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    // click: () => {
                    //   this.show(params.index)
                    // }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    // click: () => {
                    //   this.remove(params.index)
                    // }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data6: [], //用于接收table的数据
        pageSize : 5,
        pageNum : 1,
        total : undefined,
        pageSizeOpts : [5, 10]
      }
    },
    methods: {
      getUserList(){
        //请求出去的是json
        this.$axios
          .post('/user/userList', {
            pageNum : this.pageNum,
            pageSize : this.pageSize
          })
          .then(successResponse => {
            this.responseResult = JSON.stringify(successResponse.data);
            if (successResponse.data.code === 200) {
              this.data6 = successResponse.data.data.list;
              this.total = successResponse.data.data.total;
            }else {
              alert('系统错误');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      changePage(page){
        this.pageNum = page;
        this.getUserList();
      },
      changeSize(pageSize){
        this.pageSize = pageSize;
        this.getUserList();
      }
    },
    created: function () {
      this.getUserList();
    }
  }
</script>
