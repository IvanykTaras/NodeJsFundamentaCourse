# NodeJsFundamentaCourse

**Link do kursu:** https://www.youtube.com/watch?v=243pQXC5Ebs&t=294s


<img src=https://github.com/user-attachments/assets/8793df98-4f25-4134-b267-6500ea0e0ec6 height=250/>

## Informacje o npm 

```js
// iniclalizacja projektu|biblioteki|farameworku
npm init

//instalowanie paczki
npm install <<package>>

//instalowanie paczki do developmentu apliacji będą usuniente na wersji produkcyjnej
npm install --save-dev <<package>>

//odinstalowanie paczki
npm uninstall <<package>>
```

## Teoria Node.js, V8, libuv

## Model asynchroniczny 

|![image](https://github.com/user-attachments/assets/34b46cef-cf32-4f76-a78e-b713bcebf254)|![image](https://github.com/user-attachments/assets/82051128-5cf2-4c3f-bbe0-afb5dacbe359)|
|-|-|
|![image](https://github.com/user-attachments/assets/6b9c82ac-5eb5-40b9-bd73-6c49709201e4)|![image](https://github.com/user-attachments/assets/e99e98f1-e8e6-419d-8ed7-2860e2dbe820)|
|![image](https://github.com/user-attachments/assets/87ba17c2-2a92-4ec7-bd7b-1846ebacaf20)|![image](https://github.com/user-attachments/assets/8594cc72-e546-4dbd-86a7-8581f4e637cc)|
|![image](https://github.com/user-attachments/assets/a4cc3ef1-c162-4bcc-983a-537a89a18221)|![image](https://github.com/user-attachments/assets/f147e253-5b85-496a-b3ab-e49cea25b3e8)|
|![image](https://github.com/user-attachments/assets/0bd65092-5ea8-41fc-a428-c0cc70d94cd0)|![image](https://github.com/user-attachments/assets/4e129ee1-648d-4e90-b40d-6a01fda934fc)|

## Praktyka. process, zmiene srodowiskowe

```js

// aplication arguments
process.argv

node ./main.js arg1 arg2 arg3

args [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\taras\\Desktop\\Learn Programming\\NodeJsFundamentaCourse\\project\\main.js',
  'asdf',
  'asdf',
  'f'
]

// envirement variables
process.env

//id process
process.pid

// exit application
process.exit();
```

## Path, URL

```js

__filename
__dirname
path.join("1","2","3") // 1/2/3
const a = path.resolve("1","2","3")
path.parse(a)
```

|![image](https://github.com/user-attachments/assets/6ace09b5-d0c9-4569-8746-d3392ff484f2)|![image](https://github.com/user-attachments/assets/8db4d9b0-1535-40f1-8616-990940d8849d)|
|-|-|



