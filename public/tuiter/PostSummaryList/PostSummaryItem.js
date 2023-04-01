const PostSummaryItem =(post) => {
    return(`
        <div class = "row">
            <div class="col-9">
                <span class="wd-post">${post.topic}</span><br>
                <b>${post.userName}</b> <i class="fa fa-check-circle"></i><span class="wd-post"> - ${post.time}</span><br>
                <b>${post.title}</b>
            </div>
            <div class="col-3">
                <img src= ${post.image} class="wd-image" style="float: right"/>
            </div>
        </div>
    `)
}

export default PostSummaryItem;