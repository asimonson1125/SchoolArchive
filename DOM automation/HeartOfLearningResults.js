let a = await fetch("http://www.key103radio.com/wp-admin/admin-ajax.php", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:75.0) Gecko/20100101 Firefox/75.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest"
    },
    "referrer": "http://www.key103radio.com/heart-of-learning/",
    "body": "action=wpb_gallery_save_votes&votes=10&gallery_id=25729&item_id=25737&siteid=612&user_ip_address=97b90ba0dd9aa5633b749510a4cf1353_71.204.209.90",
    "method": "POST",
    "mode": "cors"
});
let b = await a.json();
console.log(b.results.items[25737].like_count);
