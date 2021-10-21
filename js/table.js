const thead_list = ["폴더명","1분할","4분할","12분할","관측망도","단위"]

function fetch_json(url){
    const result = fetch(url).then(res => res.json());
    return result;
}//fetch_json

export async function start_making_table(file_name){
    const url = `./data/${file_name}.json`;
    const data = await fetch_json(url);
    display_data(data);
}//start_making_table

function display_data(data){
    const sect = document.createElement('SECTION');
    //제목 만들기
    make_title(data,sect);
    //테이블 만들기
    make_table(data,sect);
    //최종 추가
    document.body.appendChild(sect);
}

/* 제목 만들기 */
function make_title(data,sect){
    const sect_title = document.createElement('INPUT');
    sect_title.type="text";
    sect_title.value = data.title;
    sect_title.readOnly = true;
    sect_title.classList.add('title');
    sect.appendChild(sect_title);
}//make_title

/* 테이블 만들기 */
function make_table(data,sect){
    const new_table = document.createElement('TABLE');
    //colgroup
    make_table_colgroup(new_table);
    //thead
    make_table_thead(new_table)
    //tbody
    make_table_tbody(data,new_table);
    //테이블 최종 추가
    sect.appendChild(new_table);
}//make_table

function make_table_colgroup(table){
    const cg = document.createElement('COLGROUP');
    for(let i=0; i<thead_list.length; i++){
        const col = document.createElement('COL');
        if(i==0){col.style.width = "30%";}
        cg.appendChild(col);
    }
    table.appendChild(cg);
}//make_table_colgroup

function make_table_thead(table){
    const n_thead = document.createElement('THEAD');
    const n_tr = document.createElement('TR');
    for(let i=0; i<thead_list.length; i++){
        const n_th = document.createElement('TH');
        n_th.innerText = thead_list[i];
        n_tr.appendChild(n_th);
    }
    n_thead.appendChild(n_tr);
    table.appendChild(n_thead);
}//make_table_thead

function make_table_tbody(data,table){
    const items = data.items;
    const n_tbody = document.createElement('TBODY');
    for(let item of items){
        const n_tr = document.createElement('TR');
        for(let key in item){
            const th_td = create_content(key,item);
            n_tr.appendChild(th_td);
        }//for
        n_tbody.appendChild(n_tr);
    }//for
    table.appendChild(n_tbody);
}//make_table_tbody

function create_content(key,item){
    let result;
    let ipt;
    switch(key){
        case "title" :
            result = document.createElement('TH');
            ipt = document.createElement('INPUT');
            ipt.type = "text";
            ipt.value = item[key];
            ipt.readOnly = true;
            result.appendChild(ipt);
            break;

        case "per" :
            result = document.createElement('TD');
            ipt = document.createElement('INPUT');
            ipt.type = "text";
            ipt.value = item[key];
            ipt.readOnly = true;
            result.appendChild(ipt);
            break;

        default :
            result = document.createElement('TD');
            result.innerText = item[key] ? '✅' : '';
            break;
    }
    return result;
}//create_content