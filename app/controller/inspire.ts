import { Controller, Context } from 'egg'

export default class InspireController extends Controller {
  public async home(ctx: Context) {
    console.log('ctx.params: ', ctx.params)
    const title = 'Node 直接获取渲染数据'
    await ctx.render('inspire.js', { title })
  }
}
