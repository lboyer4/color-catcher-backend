# Color-Catcher-Backend

## Description

Color Catcher Backend is the backend of the Color Catcher Frontend project. It is a partner project in mod4 of Turing, that gave us practice using Node, Express, Postgres, and Postico
You can view the frontend repo [here](https://github.com/lboyer4/color-catcher-frontend.git).

Heroku deployment: [color-catcher-backend](https://colorcatcher.herokuapp.com/)

## Installation
  #### 1. Clone down this repo and cd in to it
  ```git clone https://github.com/lboyer4/color-catcher-backend.git```
  #### 2. Run npm install
 ```npm install```
 #### 3. Start server
```npm start```

## Project

### GET /api/v1/project

#### Response 

#### Status OK

#### Link: `http://localhost:3001/api/v1/project`

```
[  
    {  
        
        name: "project 1",
        id: 1, 
        "created_at": "2019-07-06T18:38:10.378Z",  
        "updated_at": "2019-07-06T18:38:10.378Z"     
    },  
    {  
        
        name: "project 2",
        id: 1, 
        "created_at": "2019-07-06T18:38:10.378Z",  
        "updated_at": "2019-07-06T18:38:10.378Z"     
    }   
]   
   ``` 
   
### GET /api/v1/project/:id

#### Response 

#### Status OK

#### Link: `http://localhost:3001/api/v1/project/1`

```
[
    {  
        
        name: "project 1",
        id: 1, 
        "created_at": "2019-07-06T18:38:10.378Z",  
        "updated_at": "2019-07-06T18:38:10.378Z"     
    }
]
```

## Palettes

### GET /api/v1/palettes

#### Response 

#### Status OK

#### Link: `http://localhost:3001/api/v1/palettes`

```
[  
    {
    id: 25,  
    project_id: 35,  
    color_1: '00FF00',   
    color_2: 'FFFFFF',   
    color_3: '008080',   
    color_4: '008000',   
    color_5: '00FFFF',  
    "created_at": "2019-07-06T18:38:10.378Z",    
    "updated_at": "2019-07-06T18:38:10.378Z"    
    },    
    {  
    id: 26,  
    project_id: 36,    
    color_1: '00FF00',     
    color_2: 'FFFFFF',     
    color_3: '008080',     
    color_4: '008000',     
    color_5: '00FFFF' 
    "created_at": "2019-07-06T18:38:10.378Z",  
    "updated_at": "2019-07-06T18:38:10.378Z"  
    }  
  ]
  ```
  
### GET /api/v1/palettes/:id

#### Response 

#### Status OK

#### Link: `http://localhost:3001/api/v1/palettes/26`

```
[  
    {  
    "id": 26,  
    project_id: 36,  
    color_1: '00FF00',   
    color_2: 'FFFFFF',   
    color_3: '008080',   
    color_4: '008000',   
    color_5: '00FFFF',  
    "created_at": "2019-07-06T18:38:10.378Z",    
    "updated_at": "2019-07-06T18:38:10.378Z" 
    }  
]  
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3001/api/v1/palettes/999`

```
{
    "error": "Couldn't find palette with id: 999"
}
```

### GET /api/v1/palettes/:id?project=included

#### Response

#### Status OK

#### Link: `http://localhost:3001/api/v1/palettes/62?project=included`

```
[
    {
        "id": 62,
        "name": "new",
        "color_1": "6ACE3D",
        "color_2": "7E394E",
        "color_3": "CCA80A",
        "color_4": "5B232E",
        "color_5": "DFC8C0",
        "project_id": 26,
        "created_at": "2019-07-10T01:41:47.817Z",
        "updated_at": "2019-07-10T01:41:47.817Z",
        "project_name": "asfgasd"
    }
]
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3001/api/v1/palettes/2?project=included`

```
{
    "error": "Couldn't find palette with id: 2"
}
```

## Project

### POST /api/v1/project

#### Link: `http://localhost:3001/api/v1/project`

#### Required Parameters:

| Name         | Type           | Description   |
| :---         | :---:          | ---:          |
| project      | string         | project name  |

##### Example:

```
{  
    "name": "my best project 6"  
}
```

#### Response 

#### Status 201 Created

```
{   
"id": 38   
}
```

#### Response

#### Status 422 unprocessable entity

```
{
    "error": "Expected format: { name: <String> } You're missing \"name\" property."
}
```

## Palettes

### POST /api/v1/palettes

#### Link: `http://localhost:3001/api/v1/palettes`

#### Required Parameters:

| Name         | Type           | Description   |
| :---         | :---:          | ---:          |
| color_1      | string         | color_1 hex   |
| color_2      | string         | color_2 hex   |
| color_3      | string         | color_3 hex   |
| color_4      | string         | color_4 hex   |
| color_5      | string         | color_5 hex   |

##### Example:

```
{   
    "color_1": "#CD5C5C",   
    "color_2": "#62504C",
    "color_3": "#FA8072",
    "color_4": "#E9967A",
    "color_5": "##FFA07A",
}
```

#### Response 

#### Status 201 Created

```
{
    "id": 28
}
```

#### Response

#### Status 422 unprocessable entity

```
{
    "error": "Expected format: { name: <String> } You're missing \"color_1\" property."
}
```

## Project

### PUT /api/v1/project/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3001/api/v1/project/33`

```
"OK"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3001/api/v1/project/333`

```
{
    "error": "Couldn't update: Project does not exist"
}
```

## Palettes

### PUT /api/v1/palettes/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3001/api/v1/palettes/23`

```
"OK"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3001/api/v1/palettes/223`

```
{
    "error": "Couldn't update: Palette does not exist"
}
```

## Project

### DELETE /api/v1/project/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3001/api/v1/project/33`

```
"Deleted project with id 33"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3001/api/v1/project/335`

```
{
    "error": "Could not find project with id: 335"
}
```

## Palettes

### DELETE /api/v1/palettes/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3001/api/v1/palettes/23`

```
"Deleted palette with id 23"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3001/api/v1/palettes/253`

```
{
    "error": "Could not find palette with id: 253"
}
```

## Goals
The goals of this project's frontend was to create an App that generates random colors, allows you to "freeze" colors, and save projects and palettes to the backend. It uses ReactJS, Redux, Enzyme, and Jest.

The goals of this project's backend was to get comfortable using Express and Node.js, and to implement Travis CI.

## Contributors
[Lauren Boyer](https://github.com/lboyer4)

[Sally Haefling](https://github.com/SallyHaefling)
