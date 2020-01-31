from django.shortcuts import render,redirect,get_object_or_404
from .models import Article,Comment
from django.utils import timezone
from user.models import CustomUser
from .forms import ArticleForm,CommentForm
# from django.core.paginator import paginator

# Create your views here.
def main(request):
    return render(request, 'board/Notice.html')
def read(request):
    articles = Article.objects
    article_list = Article.objects.all()
    # paginator = Paginator(article_list, 10)
    # page = request.GET.get('page')
    return render(request, 'board/Notice.html',{'articles':articles})

def create(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST)
        if form.is_valid:
            post = form.save(commit=False)
            post.time = timezone.now()
            post.save()
            return redirect('../') 
    else:
        form = ArticleForm()
        return render(request, 'board/new.html', {'form':form})

def detail(request,article_id):
    article = get_object_or_404(Article, id=article_id)
    user = CustomUser.objects
    if request.user.is_authenticated:
        author = request.user.username
        if request.method=='POST':
            form = CommentForm(request.POST)
            if form.is_valid():
                comment = form.save(commit=False)
                comment.author = author
                comment.text = form.cleaned_data["text"]
                comment.save()
                return redirect("board:detail", article_id)
        else:
            form = CommentForm()
            return render(request, 'board/Notice_detail.html', {'article':article,'form':form})
            

    

    
