<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment">
      <div class="yhpj">用户评价</div>
      <div class="empty"></div>
      <div class="gd">更多</div>
    </div>
    <div class="user">
      <img class="avatar" :src="commentInfo[0].user.avatar" />
      <span class="uname">{{commentInfo[0].user.uname}}</span>
    </div>
    <div class="content">
      <p>{{commentInfo[0].content}}</p>
    </div>
    <div class="info">
      <span class="data">{{commentInfo[0].created | showData}}</span>
      <span>{{commentInfo[0].style}}</span>
    </div>
    <div class="info-img">
      <img :src="item" :key="index" v-for="(item, index) in commentInfo[0].images">
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/util'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showData(value) {
      let data = new Date(value * 1000)
      return formatDate(data, 'yyyy-MM-dd')
    }
  },
  created() {
    console.log(this.commentInfo)
  }
}
</script>

<style scoped>
.detail-comment-info {
  padding: 10px 30px;
}

.detail-comment-info .comment {
  padding: 20px 0px;
  display: flex;
  border-bottom: 3px solid #f3f5f8;
}

.detail-comment-info .comment .yhpj {
  width: 70px;
}

.detail-comment-info .comment .empty {
  flex: 1;
}

.detail-comment-info .comment .gd {
  width: 40px;
}

.detail-comment-info .user {
  padding: 20px 0px 0px;
}

.detail-comment-info .user .avatar {
  width: 60px;
  height: 60px;
  border: 1px solid #eee;
  border-radius: 50%;
  vertical-align: middle;
}

.detail-comment-info .user .uname {
  padding: 0px 20px;
}

.detail-comment-info .info span {
  font-size: 12px;
  margin-right: 8px;
}

.detail-comment-info .info-img img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}

</style>
