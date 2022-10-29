from distutils.log import error
from django.http import JsonResponse
from .models import *
import json

# 画像パスに対するクラスを返すAPI
def returnImageClass(request):
    # 仮レスポンス
    context = {
        'success': True,
        'message': "success",
        'estimated_data': {
            'class': 1,
            'confidence': 0.5
        }
    }
    
    # エラー時
    # context = {
    #     'success': False,
    #     'message': "error ",
    #     'estimated_data': {}
    # }
    return JsonResponse(context)

# 取得したデータを保存するAPI
def saveImageClass(request):

    # リクエストで送られたデータを取得
    post_data = json.loads(request.body).get("save_data")

    # モデルのインスタンスを作成し保存
    try:
        add_analytics_log = ai_analysis_log(
            image_path = post_data['image_path'],
            success = post_data['success'],
            message = post_data['message'],
            class_num = post_data['class_num'],
            confidence = post_data['confidence'],
            request_timestamp = post_data['request_timestamp'],
            response_timestamp = post_data['response_timestamp']
        )
        add_analytics_log.save()
    except:
        return JsonResponse({'result': {"message": "エラーが発生しました"}})

    # 保存したデータを返す
    analitics_log_obj = ai_analysis_log.objects.filter(id=add_analytics_log.id).values()
    return JsonResponse({'result': list(analitics_log_obj)})
