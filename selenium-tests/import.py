# -*- coding: utf8 -*-

from selenium import webdriver

driver = webdriver.Chrome()  # Optional argument, if not specified will search path.
driver.get('http://localhost:3000/')
import_xpath = '//*[@id="root"]/div/div[1]/div[1]/nav/div/div/div[2]/ul/li[2]/span'
elem = driver.find_element_by_xpath(import_xpath)
elem.click()
elem = driver.find_element_by_xpath('//*[@id="formControlsTitlearea"]')
title = u'中国新感觉派'
body = u"""\
二十年代末期和三十年代初期，中国文坛出现了一个以刘呐鸥、穆时英、施蛰存、叶灵凤为代表的新的小说流派，由于他们直接受到日本的“新感觉派”的影响，因此被称为中国的“新感觉派”小说家。这是中国第一个现代主义小说流派。
附：
施蛰存
1929年施蛰存在中国第一次运用心理分析创作小说《鸠摩罗什》、《将军的头》而成为中国现代小说的奠基人之一。1930年代他主编的《现代》杂志，引进现代主义思潮，推崇现代意识的文学创作，在当时影响广泛。抗日战争爆发後，他曾先后执教于云南大学、厦门大学、暨南大学和光华大学。1952年以後他任教于上海华东师范大学中文系。施蛰存因早年与鲁迅有过论战，因而在1950年代至1970年代受到迫害，他也因此告别文学创作和翻译工作，转而从事古典文学和碑版文物的研究工作。20世纪80年代，由于现代主义思潮的重新涌入中国，他的文学创作才又重新开始受到重视。
施蛰存一生的工作可以分为四个时期：1937年以前，除进行编辑工作外，主要创作短篇小说、诗歌及翻译外国文学；抗日战争期间进行散文创作；1950年—1958年期间，翻译了200万字的外国文学作品；1958年以後，致力于古典文学和碑版文物的研究工作。
相比之下，施蛰存的小说创作则高于刘呐鸥和穆时英。施蛰存的病态小说，题材更为广阔，内容也更为丰富。他不仅以上海为主要场景反映大都市的病态生活，而且还对上海市郊小城镇的生活作了形象的扫描。他笔下的人物多是生活在都市底层的小人物，如舞女、小商人、小职员之类。作者对他们寄予了深切的同情，以酣畅淋漓的笔触来抒写他们受生活挤压的惨苦情状。如《薄暮的舞女》的主人公素雯非常厌倦终日陪伴男人们寻欢作乐的舞女生涯，把脱离苦海的希望寄托在她的情人身上，并因此中止了与舞厅老板签订的合同，也拒绝陪客人跳舞。恰在此时，她的情人破了产。她的希望成了泡影，她又只好低三下四地给舞客打电话，陪笑脸，表示不再拒绝对方的邀请。素雯的前后变化，决不是她个人的品行不端，而是由于生活的折磨，她不得不去食自己泡制的苦果。

"""

elem.send_keys(title)
elem = driver.find_element_by_xpath('//*[@id="formControlsTextarea"]')
elem.send_keys(body)
elem = driver.find_element_by_xpath('/html/body/div[2]/div/div[2]/div/div/div[2]/form/div[2]/button')
elem.click()
