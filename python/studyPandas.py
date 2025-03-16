import pandas as pd

word_dict={
    'apple':'사과',
    'banana':'바나나',
    'carrot':'당근'
}
frequency_dict={
     'apple':3,
    'banana':5,
    'carrot':1
}
price_dict={
     'apple':900,
    'banana':800,
    'carrot':300
}


word=pd.Series(word_dict)
frequency=pd.Series(frequency_dict)
price=pd.Series(price_dict)

summary=pd.DataFrame({
    'word':word,
    'frequency': frequency,
    'price': price
})
fee =summary['frequency'] * summary['price']
summary['fee']=fee
print(summary)