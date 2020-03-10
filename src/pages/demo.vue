<template>
  <v-app id="inspire">

    <v-app-bar
            fixed
            dense
            color="white"
            elevate
            scroll-target="#scrolling"
    >
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
      <v-tabs
              color="deep-indigo"
              fixed-tabs
              light
              show-arrows
              background-color="transparent"
      >
        <v-tabs-slider color="deep-indigo"></v-tabs-slider>
        <v-tab>
          发现
        </v-tab>
        <v-tab>
          播客
        </v-tab>
        <v-tab>
          插画
        </v-tab>
        <v-tab>
          素材&主题
        </v-tab>
        <v-tab>
          技术&开发
        </v-tab>
        <v-tab>
          洞察&见解
        </v-tab>
        <v-tab>
          垂直&小众
        </v-tab>
        <v-tab>
          未分类&长尾
        </v-tab>
      </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <v-container
              class="grid overflow-y-auto h-full"
              style="width: 1200px; padding-top: 140px"
              id="#scrolling"
      >

            <v-hover v-slot:default="{ hover }"
                     v-for="(item, index) in items" :post="item" :key="index"
                     cols="12"
                     lg="6">

              <v-card
                width="360"
                class="grid-item"
              >
              <v-row
                align="center"
                class="ma-0"
                justify="space-between"
              >
                <v-col cols="12">
                  <h2 class="text-uppercase mb-4 text-center p3">
                    <div class="headline font-weight-bold">{{ item.title }}</div>

                    <div class="font-weight-thin display-1">{{ item.description }}</div>
                  </h2>

                  <div class="pa-4 h-20">
                    {{item.content}}
<!--                    <base-markdown>{{ item.content }}</base-markdown>-->
                  </div>
                </v-col>

                <v-col
                        class="hidden-xs-only text-center"
                        cols="12"
                >
                  <v-card
                          class="d-inline-block"
                  >
                    <v-img
                            :src="'https://design.maliquankai.com/' + item.cover"
                            :aspect-ratio="16/9"
                            class="mx-auto"
                            width="275"
                    />
                  </v-card>
                </v-col>
                <v-col
                        v-if="item.guid"
                        cols="12"
                        class="mt-4 text-center"
                >
                  <v-btn
                          :href="item.guid"
                          :rel="item.guid && 'noopener'"
                          :target="item.guid && '_blank'"
                          outlined
                          small
                  >
                    详情
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            <v-row>
            </v-row>
            </v-card>
            </v-hover>
      </v-container>

    </v-content>
    <v-footer
            color="indigo"
            app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import WebsiteCard from '~/components/cards/website.vue'
if (process.browser) {
  var Isotope = require('isotope-layout')
}
@Component({
  components: {
    WebsiteCard
  }
})
export default class Demo extends Vue {
  @Prop() source!: string
  drawer: any = null
  items: object[] = [
    {
      cover: 'images/illustration/undraw.jpg',
      guid: 'https://undraw.co/illustrations',
      description: '一个扁平化插画图库',
      title: 'unDraw',
      content: 'unDraw是由Katerina Limpitsouni创建的一个扁平化插画图库，从网站上就可以直接调整所有插图的主要颜色，支持下载SVG和PNG格式，不需要标示出处，可用于商业用途。'
    },
    {
      cover: 'images/illustration/manypixels.jpg',
      guid: 'https://www.manypixels.co/gallery/',
      description: '插画颜色以渐变色为主',
      title: 'ManyPixels',
      content: 'ManyPixels插画颜色以渐变色为主，图案细节更细腻。网站每周都会发布新的插画素材，支持下载SVG和PNG格式，可免费用于个人及商业用途。'
    },
    {
      cover: 'images/illustration/delesign.png',
      guid: 'https://delesign.com/free-designs/graphics',
      description: '可自定义的免费插画素材网站',
      title: 'Delesign',
      content: '一个超多完全可自定义的免费插画素材网站，插画素材的格式有SVG和PNG两种格式，我们可以免费用到自己的项目中，而且没有版权限制。'
    },
    {
      cover: 'images/illustration/mixkit.png',
      guid: 'https://mixkit.co/free-stock-art/',
      description: '视频素材和插画素材',
      title: 'MixKit',
      content: 'MixKit不仅有大量的高画质视频素材还有各种风格的插画素材，网站所有内容都可以免费使用，无论商业或非商业用途皆可自由运用。'
    },
    {
      cover: 'images/illustration/drawkit.jpg',
      guid: 'https://www.drawkit.io/',
      description: '免费矢量插画网站',
      title: 'DrawKit',
      content: 'DrawKit是由来自澳大利亚的设计师、插画师James创建的一个免费矢量插画网站，目前包含40多个免费插画、20个插画合集、100个模块化插画组件。'
    },
    {
      cover: 'images/illustration/IraDesign.png',
      guid: 'https://iradesign.io/',
      description: '矢量插画组件素材网站',
      title: 'Ira Design',
      content: 'Ira Design是一个完全免费的矢量插画组件素材网站，内容包含11个人物、16个物件和15个背景，下载支持PNG和SVG两种格式，所有组件都可以免费用在商业或个人项目中。'
    },
    {
      cover: 'images/illustration/humaaans.png',
      guid: 'https://www.humaaans.com/',
      description: '现代扁平风矢量插画素材',
      title: 'Humaaans',
      content: '旧金山设计师 Pablo Stanley 设计的一套现代扁平风矢量插画素材，素材格式包含 .sketch / .svg / .png 三种格式，无论你是使用哪个软件对素材进行再编辑都会很方便。'
    },
    {
      cover: 'images/illustration/doodles.png',
      guid: 'https://www.opendoodles.com/',
      description: '涂鸦类型的插画集',
      title: 'Open Doodles',
      content: '来自墨西哥设计师 Pablo Stanley 的最新免费插画资源，你可以出于任何目的复制、编辑、重组、共享或重画这些图像，同时完全不必担心版权的限制。'
    },
    {
      cover: 'images/illustration/openpeeps.jpg',
      guid: 'https://www.openpeeps.com',
      description: '手绘插画库',
      title: 'Open Peeps',
      content: 'Open Peeps是一个手绘插画库，用于创建人物场景，支持多种格式可免费用于个人和商用项目中。'
    },
    {
      cover: 'images/illustration/buttsss.jpg',
      guid: 'https://www.buttsss.com',
      description: '美丽的圆屁股插画集合',
      title: 'Buttsss',
      content: 'Buttsss是宇宙中最大胆的圆形和美丽屁股插画集合，您可以在广告投放平台、产品演示、营销活动、业务演示或激励性演讲中使用这些GIF。'
    },
    {
      cover: 'images/illustration/illlustrations.png',
      guid: 'https://illlustrations.co/',
      description: '插图以各种常见物品为主题',
      title: 'illlustrations',
      content: '插图以各种常见物品为主题，绘制相当细腻漂亮且颇具质感，所有的插图都采用MIT License授权，最重要的是你可以自由下载、编辑、重新混合个人和商业设计项目中。'
    },
    {
      cover: 'images/illustration/digital.jpg',
      guid: 'https://app.itg.digital',
      description: '创建漂亮的插画',
      title: 'ITG.digital',
      content: '使用在线构建器，您可以轻松地制插图、更改插图元素、样式和颜色，使其完全适合您的品牌。'
    },
    {
      cover: 'images/illustration/absurd.jpg',
      guid: 'https://absurd.design/',
      description: '纯手绘荒诞插图网站',
      title: 'Absurd',
      content: 'Absurd是一个纯手绘荒诞插图网站，插图样式有极简线条和色彩填充两种，你可以将它们用于个人和商业项目，免费用户可下载11个免费PNG格式文件。'
    },
    {
      cover: 'images/illustration/ouch.png',
      guid: 'https://icons8.com/ouch',
      description: 'Icon8的矢量插画项目网站',
      title: 'Ouch！',
      content: 'Ouch！是Icon8的矢量插画项目网站，支持按插画风格样式和插画内容主题查看插画，免费用户可以下载网站所有插画的PNG格式，付费后可下载SVG格式。'
    },
    {
      cover: 'images/illustration/outlane.jpg',
      guid: 'https://outlane.co/topics/freebie',
      description: '免费插画素材',
      title: 'outlane.co',
      content: '免费插画素材下载，支持svg和png格式，品质非常高。'
    },
    {
      cover: 'images/illustration/folio.jpg',
      guid: 'https://folioart.co.uk',
      description: '插画艺术作品展示网站',
      title: 'Folio Art',
      content: '「Folio插画社」是英国的一家插画艺术作品展示网站，由尼古拉斯·达维于1976年创办工作室并上线网站。'
    },
    {
      cover: 'images/illustration/markconlan.jpg',
      guid: 'http://markconlan.com',
      description: '充满活力的奇想插画作品',
      title: 'Mark Conlan',
      content: '致力于描绘异想天开的画面构图与内容创想，同时配以充满活力的颜色。'
    },
    {
      cover: 'images/illustration/paperillustrations.jpg',
      guid: 'https://iconscout.com/paper-illustrations',
      description: '一套极其精美的纸质插画',
      title: 'Paper Illustrations',
      content: '一组20个可用的插画，精心制作的插画可用于不同类别，完全免费供个人和商业使用。'
    },
    {
      cover: 'images/illustration/getillustrations.png',
      guid: 'https://www.getillustrations.com',
      description: '一个免费可商用的完美插画包',
      title: 'Getillustrations',
      content: '这个完美的插画包可用于移动端、网站和印刷材料，插画素材的动画看起来也很酷而且支持多种文件格式。'
    },
    {
      cover: 'images/illustration/control.png',
      guid: 'https://control.rocks',
      description: '组合设置的108个可自定义插图',
      title: 'Control',
      content: 'Control Free Illustrations 创建了一个大型的插图库，其中包含可自定义的样式和动作类型。'
    },
    {
      cover: 'images/illustration/woobrodesign.jpg',
      guid: 'https://woobro.design',
      description: '免费可商用的矢量插画图素材',
      title: 'Woobro.Design',
      content: '由设计师为设计师们创建的免费资源站，它支持SVG、Sketch、AI和PNG格式的插画，你可以随意将这些插图用于个人和商业项目。'
    },
    {
      cover: 'images/illustration/oldbook.jpg',
      guid: 'https://www.oldbookillustrations.com',
      description: '收集复古手绘风格的插画素材',
      title: 'Old Book Illustrations',
      content: '寻找复古风格插图的最佳去处，而且是免费的，可以搜索到旧书籍和共享的插图，所以不用考虑版权，这是很好的图片收集网站，类别涵盖植物、建筑、动物、纪念碑、饰品等等。'
    },
    {
      cover: 'images/illustration/avataaars.jpg',
      guid: 'https://avataaars.com/',
      description: '免费Sketch头像插画素材库',
      title: 'Avataaars',
      content: 'Avataaars是由Pablo Stanley设计的一个免费Sketch头像插画素材库，结合发型、发色、五官表情、衣服、配饰、肤色等自定义你的头像，素材完全支持免费用于个人和商业用途。'
    },
    {
      cover: 'images/illustration/agent.jpg',
      guid: 'https://www.agent002.com',
      description: '法国的一个插画网站',
      title: 'Agent002',
      content: 'Agent002 创立于1999年，有众多法国插画师们的一系列作品，以及博客。'
    },
    {
      cover: 'images/illustration/lukaszadam.jpg',
      guid: 'https://lukaszadam.com/illustrations',
      description: '免费可商用的矢量艺术插画和图标',
      title: 'LukaszAdam Illustrations',
      content: '一个独立网页设计师Lukasz Adam的个人网站，其中的一个模块用来提供免费的矢量艺术插画和图标，每个插画和图标素材都提供了SVG和PNG格式。'
    },
    {
      cover: 'images/illustration/freshfolk.jpg',
      guid: 'https://fresh-folk.com',
      description: '人和物体的插画库',
      title: 'Fresh Folk',
      content: 'Fresh Folk每个角色都有各种姿势，服装和肤色，使用43种对象创建广泛的场景供您选择。'
    },
    {
      cover: 'images/illustration/streamlineicons.jpg',
      guid: 'https://streamlineicons.com/ux/free-illustrations.html',
      description: '240个免费LGBT插画',
      title: 'Streamline UX',
      content: '3种风格的240个矢量插图：多色、双色调、单调。'
    },
    {
      cover: 'images/illustration/itsnicethat.jpg',
      guid: 'https://www.itsnicethat.com',
      description: '分享国内外优秀的插画作品',
      title: "It's Nice That",
      content: '创意设计艺术社区是一个倡导创意融合艺术设计的世界，每天更新来自世界各地的创意作品，深度发掘和发现最有趣的创意项目。'
    },
    {
      cover: 'images/illustration/n8w.png',
      guid: 'https://www.n8w.com',
      description: '聚集优秀插画家作品的网站',
      title: 'n8w',
      content: 'Nate Williams 是美国西部的一位艺术设计总监，他为杂志、书本、包装、广告和产品设计插画和手绘字体，他的个人网站n8w记录了很多作品的灵感和实现过程。'
    },
    {
      cover: 'images/illustration/abstrakt.jpg',
      guid: 'https://www.abstrakt.design',
      description: '122个抽象插画',
      title: 'Abstrakt',
      content: '这里提供了122个抽象插画，会员可以下载所有的抽象插画，有SVG和PNG文件格式，也可以免费下载53个png格式的抽象插画，使用需要注明出处。'
    },
    {
      cover: 'images/illustration/karthiksrinivas.jpg',
      guid: 'https://www.karthiksrinivas.in/illustrations',
      description: '几组精心设计的插画',
      title: 'Karthik Srinivas',
      content: '这里提供了几组精心设计的插画，比如手工制作的插画、人工智能等类别，有的可以免费用于个人和商业项目中。'
    },
    {
      cover: 'images/illustration/vectorcreator.jpg',
      guid: 'https://icons8.com/vector-creator',
      description: '在线矢量插画编辑器',
      title: 'Vector Creator',
      content: 'icon8出品，内置 12 种风格，3000 + 插画素材，五分钟就能组装出一幅矢量插画，还能导出PNG和SVG格式。'
    },
    {
      cover: 'images/illustration/veilaabstract.jpg',
      guid: 'https://www.veila.me/freebies/lineart-abstract-vector-illustrations',
      description: '免费艺术线条抽象矢量插图',
      title: 'Abstract Illustrations',
      content: '线条艺术矢量插图在当今正在流行，并且这种流行性不容忽视。从包装和纹身设计到logo模板和品牌元素，到处都可以看到它们。'
    }
  ]

  links: string[] = [
    'Home',
    'About Us',
    'Team',
    'Services',
    'Blog',
    'Contact Us'
  ]

  mounted (): void {
    // eslint-disable-next-line no-new
    new Isotope('.grid', {
      // percentPosition: true,
      masonry: {
        gutter: 30
        // columnWidth: 260,
        // fitWidth: true
      }
      // masonry: {
      // gutter: 20,
      // fitWidth: true
      // }
    })
  }
}
</script>

<style lang="sass">
  .theme--light.v-application
    background-color: #f4f7f8
  #why-vuetify
    p
      margin-bottom: 0
    #vibrant a
      color: white !important
      text-decoration: underline

  .grid-item
    margin-bottom: 30px
    cursor: pointer
    border-radius: 30px
    box-shadow: 0 15px 30px -8px rgba(0,0,0,.08)
    transition: all .25s ease
    -webkit-animation: componentAnimate-data-v-32bd37c8 15s ease infinite
    animation: componentAnimate-data-v-32bd37c8 15s ease infinite
</style>
