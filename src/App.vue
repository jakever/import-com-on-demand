<template>
  <div id="app">
    <!-- <div :class="s.wrapper">
      <div>
        <d-row :class="s.row">
          <d-col :span="24"><div :class="[s.content]"></div></d-col>
        </d-row>
        <d-row :class="s.row">
            <d-col :span="12"><div :class="[s.content]"></div></d-col>
            <d-col :span="12"><div :class="[s.content, s.light]"></div></d-col>
        </d-row>
      </div>
      <div>
        <d-collapse @on-change="getPanels" v-model="active">
          <d-panel title="登鹳雀楼" name="one">
              <div>
                  <p>白日依山尽</p>
                  <p>黄河入海流</p>
                  <p>欲穷千里目</p>
                  <p>更上一层楼</p>
              </div>
          </d-panel>
          <d-panel title="月夜" name="two">
              <div>
                  <p>更深月色半人家</p>
                  <p>北斗阑干南斗斜</p>
                  <p>今夜偏知春气暖</p>
                  <p>虫声新透绿窗纱</p>
              </div>
          </d-panel>
          <d-panel title="静夜思" name="three">
              <div>
                  <p>床前明月光</p>
                  <p>疑是地上霜</p>
                  <p>举头望明月</p>
                  <p>低头思故乡</p>
              </div>
          </d-panel>
      </d-collapse>
      </div>
      <div :class="s.splitWrap">
        <d-split v-model="split1">
            <div slot="left" class="pane">
                左边面板
            </div>
            <div slot="right" class="pane">
                右边面板
            </div>
        </d-split>
      </div>
      <div>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <d-divider></d-divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
      </div>
      <div>
        <d-form ref="form" :model="form" label-width="80px" style="width: 520px;">
          <d-form-item label="活动名称">
              <d-input v-model="form.name" style="width: 200px;"></d-input>
          </d-form-item>
          <d-form-item label="活动区域">
              <d-select v-model="form.region" placeholder="请选择活动区域" style="width: 200px;">
                  <d-option label="区域一" value="shanghai"></d-option>
                  <d-option label="区域二" value="beijing"></d-option>
              </d-select>
          </d-form-item>
          <d-form-item label="活动时间">
              <d-col :span="11">
                  <d-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width:200px"></d-date-picker>
              </d-col>
              <d-col class="line" :span="2" style="text-align: center;">-</d-col>
              <d-col :span="11">
                  <d-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width:200px"></d-time-picker>
              </d-col>
          </d-form-item>
          <d-form-item label="即时配送">
              <d-switch v-model="form.delivery"></d-switch>
          </d-form-item>
          <d-form-item label="活动性质">
              <d-checkbox-group v-model="form.type">
                  <d-checkbox class="checkboxItem" label="美食/餐厅线上活动" name="type"></d-checkbox>
                  <d-checkbox class="checkboxItem" label="地推活动" name="type"></d-checkbox>
                  <d-checkbox class="checkboxItem" label="线下主题活动" name="type"></d-checkbox>
                  <d-checkbox class="checkboxItem" label="单纯品牌曝光" name="type"></d-checkbox>
              </d-checkbox-group>
          </d-form-item>
          <d-form-item label="特殊资源">
              <d-radio-group v-model="form.resource">
                  <d-radio label="线上品牌商赞助"></d-radio>
                  <d-radio label="线下场地免费"></d-radio>
              </d-radio-group>
          </d-form-item>
          <d-form-item label="活动形式">
              <d-input type="textarea" v-model="form.desc"></d-input>
          </d-form-item>
          <d-form-item>
              <d-button type="primary" @click="onSubmit" style="margin-right:12px;">立即创建</d-button>
              <d-button>取消</d-button>
          </d-form-item>
      </d-form>
      </div>
      <div style="width: 200px;">
        <d-input v-model="input" placeholder="请输入内容"></d-input>
      </div>
      <div>
        <d-select v-model="value" placeholder="请选择" style="width: 200px;">
          <d-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </d-option>
        </d-select>
      </div>
      <div>
        <d-button @click="openNotice">打开提醒</d-button>
      </div>
      <div>
        <d-checkbox v-model="checked">备选项</d-checkbox>
      </div>
      <div>
        <d-date-picker
          v-model="value"
          type="date"
          placeholder="选择日期">
        </d-date-picker>
      </div>
      div>
        <d-tag>标签一</d-tag>
        <d-tag type="arrow">标签二</d-tag>
        <d-tag type="select">标签三</d-tag>
      </div>
      <div class="badge1">
        <div>
            <d-badge :count="8">
                <span class="card"></span>
            </d-badge>
        </div>
        <div><d-badge type="text" text="hot"><span class="card"></span></d-badge></div>
        <div><d-badge type="isNew"><span class="card"></span></d-badge></div>
        <div><d-badge type="dot">你有新消息</d-badge></div>
        <div><d-badge type="status">用于表示状态的小圆点</d-badge></div>
      </div>
      <div>
        <d-pagination
          border
          layout="prev, pager, next"
          :total="1000">
        </d-pagination>
      </div>
      <d-table :data="tableData" height="auto">
        <d-table-column property="date" label="日期" width="180"></d-table-column>
        <d-table-column property="name" label="姓名" width="180"></d-table-column>
        <d-table-column property="dept" label="部门" width="180"></d-table-column>
        <d-table-column property="address" label="地址" min-width="280"></d-table-column>
      </d-table>
      <d-transfer v-model="value" :data="data"></d-transfer>
      <div>
          <d-button :loading="true">element ui</d-button>
          <span v-tooltip="tooltip">当鼠标经过这段文字时，会显示一个气泡框</span>
      </div>
      <div>
        <d-card type="report" :config="report"></d-card>
      </div>
      <div>
        <d-button type="text-info" @click="defaultShow = true">默认弹窗</d-button>
        <d-button type="text-info" @click="simple = true">简单弹窗</d-button>
        <d-button type="text-info" @click="step = true">步骤弹窗</d-button>
        
        <d-modal v-model="defaultShow">
          <span>默认弹窗</span>
        </d-modal>
        <d-modal type="simple" v-model="simple">
          <span>简单弹窗</span>
        </d-modal>
        <d-modal type="step" v-model="step">
          <span>步骤弹窗</span>
        </d-modal>
    </div>
    <div>
      <d-timeline>
        <d-timeline-item v-for="(item, i) in 4" :key="i">2018-{{i+1}}</d-timeline-item>
    </d-timeline>
    </div>
     <div>
        <d-rate v-model="value1"></d-rate>    
        <br>
        <d-rate v-model="value2" :max="10"></d-rate>    
    </div>
    <div>
        <d-button type="primary" @click="show = true">OPEN</d-button>
        <d-aside v-model="show" :closable="false" title="我是标题">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </d-aside>
    </div>
    <div :class="s.spin">    
        <div>
            员工性质是企业与雇员之间的用工形式<br/>
            员工性质是企业与雇员之间的用工形式<br/>
            员工性质是企业与雇员之间的用工形式<br/>
            员工性质是企业与雇员之间的用工形式
            <d-loading :active="laoding"></d-loading>
        </div>
        <d-button @click="laoding = !laoding">切换</d-button>
    </div>
    <div class="wrapper1">
        <d-dropdown>
            <d-button type="primary">
                更多菜单<d-icon type="arrow-down" style="color: #fff;"></d-icon>
            </d-button>
            <d-dropdown-menu slot="dropdown">
                <d-dropdown-item>黄金糕</d-dropdown-item>
                <d-dropdown-item>狮子头</d-dropdown-item>
                <d-dropdown-item>螺蛳粉</d-dropdown-item>
                <d-dropdown-item>双皮奶</d-dropdown-item>
                <d-dropdown-item>蚵仔煎</d-dropdown-item>
            </d-dropdown-menu>
        </d-dropdown>
        <d-dropdown dtype="splitButton" type="primary" @click="handleClick">
          更多菜单
            <d-dropdown-menu slot="dropdown">
                <d-dropdown-item>黄金糕</d-dropdown-item>
                <d-dropdown-item>狮子头</d-dropdown-item>
                <d-dropdown-item>螺蛳粉</d-dropdown-item>
                <d-dropdown-item>双皮奶</d-dropdown-item>
                <d-dropdown-item>蚵仔煎</d-dropdown-item>
            </d-dropdown-menu>
        </d-dropdown>
        <d-dropdown dtype="button" type="primary">
        更多菜单
            <d-dropdown-menu slot="dropdown">
                <d-dropdown-item>黄金糕</d-dropdown-item>
                <d-dropdown-item>狮子头</d-dropdown-item>
                <d-dropdown-item>螺蛳粉</d-dropdown-item>
                <d-dropdown-item>双皮奶</d-dropdown-item>
                <d-dropdown-item>蚵仔煎</d-dropdown-item>
            </d-dropdown-menu>
        </d-dropdown>
    </div>
    <div>
      <d-poptip
          placement="bottom"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <d-button slot="reference">click 激活</d-button>
      </d-poptip>
    </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      laoding: true,
      tooltip: '这里是提示文字',
      split1: 0.5,
      active: ['one'],
      input: '',
      checked: true,
      defaultShow: false,
      simple: false,
      step: false,
      show: false,
      value1:3,
      value2:5,
      report: {
          filename: "58简历.xls", 
          filename_ext: "xls", 
          id: "eaa69c67-f546-4730-9089-0d6dbc288a19",
          template: '3个模板'
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      data: generateData(),
      value: [1, 4],
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          dept: '开发部',
          work: '全职',
          gender: '男',
          address: '上海市普陀区金沙江路 1518 弄'
      }, {
          date: '2016-05-04',
          name: '王小狗',
          dept: '开发部',
          work: '全职',
          gender: '男',
          address: '上海市普陀区金沙江路 1517 弄'
      }, {
          date: '2016-05-01',
          name: '王小虎',
          dept: '开发部',
          work: '全职',
          gender: '男',
          address: '上海市普陀区金沙江路 1519 弄'
      }, {
          date: '2016-05-03',
          name: '王小虎',
          dept: '开发部',
          work: '全职',
          gender: '男',
          address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    openNotice () {
      this.$notice({
        title: "打开提醒",
        type: "success",
        desc: "打开提醒，4秒后关闭"
      })
    },
    getPanels(params) {
      console.log(params)
    },
    onSubmit() {
      console.log('submit!');
    },
    handleClick() {
      alert('button click');
    }
  }
}
</script>

<style lang="scss" module="s">
:root {
    --special-topbar: linear-gradient(to right, #006946, #007d5f);
    --primary: #0bb27a;
    --select: #59c993;
    --light: #b4e7d4;
    --shade-1: rgb(10, 169, 116);
    --shade-2: rgb(10, 160, 110);
    --alpha-1: rgba(11, 178, 122, 0.2);
    --alpha-2: rgba(11, 178, 122, 0.9);
    --tint-1: rgb(35, 186, 135);
    --tint-2: rgb(60, 193, 149);
    --tint-3: rgb(84, 201, 162);
    --tint-4: rgb(109, 209, 175);
    --tint-5: rgb(133, 217, 189);
    --tint-6: rgb(157, 224, 202);
    --tint-7: rgb(182, 232, 215);
    --tint-8: rgb(206, 240, 228);
    --tint-9: rgb(231, 247, 242);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
.wrapper {
  max-width: 860px;
  margin: 0 auto;
}
.row {
      margin-bottom: 32px;
  }
  .content {
      background: #d3dce6;
      border-radius: 4px;
      min-height: 36px;
  }
  .light {
      background: #e5e9f2;
  }
.splitWrap {
  height: 200px;
}
.spin {
  position: relative;
}
</style>
