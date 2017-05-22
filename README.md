## Brit - KAIST CS374, Spring 2017

### Team Brit
[1] 20110717, **Jaehoon Lee** (*alphahoon@kaist.ac.kr*), School of Computing  
[2] 20120281, **Youngeun Kim** (*dhdepddl@kaist.ac.kr*), Department of Mathematical Sciences  
[3] 20130201, **Hyunwoo Kim** (*khw0726@kaist.ac.kr*), Department of Chemistry  
[4] 20150559, **Seayeon Lee** (*syeonlee@kaist.ac.kr*), School of Computing  

### TODO: 고칠거
1. 이름 validation 해서 Next Button enable / disable 하기  

### Developing Environment Setting

Prerequisites: Node, NPM

##### 1. Install Bower

```
$ sudo npm install -g bower
```

##### 2. Install Local Dependency Packages  

In the project root directory, type:
```
$ npm install
$ bower install
```

### Run

If you want to use [Vue.js devtools](https://goo.gl/a8YYdM) on your Chrome browser, you should run  a local server on your machine.  
In the project root directory, type:
```
$ npm start
```

Then open http://localhost:3000 in your Chrome browser.  

### Webpack

```
$ npm run build
```
or
```
$ npm run dev
```
