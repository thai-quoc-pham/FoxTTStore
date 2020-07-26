var myApp = angular.module("myApp", []);

myApp.controller("productCtrl", function ($scope) {
    $scope.products = [
        {
            id: 1,
            nameprod: "Kakashi Trekpack Backpack S Turquoise",
            price: 40,
            img: "1.jpg",
            note: "Kakashi Trekpack Backpack phù hợp trong các hoạt động chạy bộ, leo núi, hoạt động thể thao không cần đem theo nhiều đồ đạc...",
            type: "dulich",
            material: "Polyester",
            size: "34 x 24 x 8 cm",
            qty: 1
        },
        {
            id: 2,
            nameprod: "Kakashi Kiyo Sling S Black",
            price: 33,
            img: "2.jpg",
            note: "Kakashi Kiyo Sling có thể sử dụng đi dạo phố, đi dã ngoại hay du lịch vô cùng tiện lợi. Hơn nữa, được làm từ chất liệu vải chống thấm nước cùng thiết kế nhiều ngăn tiện dụng.",
            type: "deocheo",
            material: "Polyester, Nylon",
            size: "39 x 11 x 21cm",
            qty: 1
        },
        {
            id: 3,
            nameprod: "Puma New Pioneer Backpack I M Navy",
            price: 12,
            img: "3.jpeg",
            note: "Puma New Pioneer Backpack đem đến phong cách cá tính, mạnh mẽ bởi màu sắc và thiết kế hiện đại. Balo nhẹ và rộng rãi, thiết kế nhiều ngăn tiện lợi. Ngoài ra, balo còn có ngăn laptop nằm bên trong ngăn chính bảo vệ thiết bị khỏi ngoại lực và trầy xước.",
            type: "dulich",
            material: "Polyester",
            size: "31 x 45 x 15 cm",
            qty: 1
        },
        {
            id: 4,
            nameprod: "Kakashi Ena Backpack S Blue",
            price: 39,
            img: "4.jpg",
            note: "Kakashi Ena Backpack là dòng balo thời trang với thiết kế nhỏ gọn mang đến phong cách trẻ trung, năng động.",
            type: "thuong",
            material: "Polyester Two Tone Oxford",
            size: "33 x 25 x 10 cm",
            qty: 1
        },
        {
            id: 5,
            nameprod: "Kakashi Minko Backpack M Black",
            price: 79,
            img: "5.jpg",
            note: "Kakashi Minko Backpack là mẫu balo chống nước có thiết kế năng động, hiện đại đến từ thương hiệu balo, túi xách cao cấp Kakashi. Với sự tỉ mỉ trong từng chi tiết, Kakashi đã tạo nên một sản phẩm vừa tiện lợi lại thời trang",
            type: "thuong",
            material: "Polyester",
            size: "40 x 30 x 12cm",
            qty: 1
        },
        {
            id: 6,
            nameprod: "Tricsport Sandstorm Backpack M Sandstone",
            price: 169,
            img: "6.jpg",
            note: "Tricsport Sandstorm Backpack là một dòng balo mới xuất hiện, mang đậm phong cách mạnh mẽ và cá tính. Balo còn được tích hợp hàng ngàn tiện ích mà khi gặp bạn sẽ đổ gục từ lần đầu tiên. Balo cực tiện lợi phù hợp cho những chuyến đi xa hoặc du lịch.",
            type: "dulich",
            material: "Cordura",
            size: "44 x 27 x 18cm",
            qty: 1
        },
        {
            id: 7,
            nameprod: "Tricsport Transporter Backpack M D.Grey",
            price: 119,
            img: "7.jpg",
            note: "Tricsport Transporter Backpack là mẫu balo du lịch có kiểu dáng gọn gàng, trẻ trung đến từ thương hiệu balo, túi xách nổi tiếng. Với sự chú trọng về tiện ích cho người dùng, hãng đã tạo nên một sản phẩm balo đa năng có thiết kế nhiều ngăn tiện lợi rất độc đáo cùng vẻ ngoài tối giản, thanh lịch có thể đồng hành cùng bạn trong mọi chuyến đi. ",
            type: "dulich",
            material: "NYLON 550D",
            size: "35 x 21 x 50 cm",
            qty: 1
        },
        {
            id: 8,
            nameprod: "Seliux F3 Demon Backpack M Navy",
            price: 99,
            img: "8.jpg",
            note: "Seliux F3 Demon Backpack là balo thương hiệu độc quyền Seliux. Các sản phẩm balo, túi xách, phụ kiện của Seliux đều được làm từ chất liệu cao cấp được kiểm định nghiêm ngặt.",
            type: "dulich",
            material: "Chicken Tex",
            size: "53 x 31.5 x 18cm",
            qty: 1
        },
        {
            id: 9,
            nameprod: "Seliux F6 Skyray Backpack M Grey",
            price: 119,
            img: "9.jpg",
            note: "Seliux F6 Skyray Backpack được chú trọng đầu tư về chất liệu, đem đến cho mọi người sản phẩm balo hoàn hảo về chức năng và sử dụng linh hoạt trong nhiều điều kiện thời tiết khác nhau.",
            type: "thuong",
            material: "Chicken Tex, 420D RipStop",
            size: "43 x 30 x 12 cm",
            qty: 1
        },
        {
            id: 10,
            nameprod: "Beam Backpack Solar Power Backpack K9386W M Black",
            price: 399,
            img: "10.jpg",
            note: "Beam Backpack Solar Power Backpack K9386W là sản phẩm balo năng lượng mặt trời tiến tiến nhất được biết đến qua những giải thưởng quốc tế uy tín, đến từ thương hiệu BEAM. Thiết kế theo phong cách Châu Âu và qua quy trình kiểm định chất lượng nghiêm ngặt",
            type: "dulich",
            material: "Polyester",
            size: "46 x 32 x 15 cm",
            qty: 1
        },
        {
            id: 11,
            nameprod: "Kakashi Eiko Backpack M Black/Blue",
            price: 99,
            img: "11.jpg",
            note: "Kakashi Eiko Backpack là mẫu balo học sinh có thiết kế năng động, hiện đại đến từ thương hiệu balo, túi xách cao cấp Kakashi. Với sự tỉ mỉ trong từng chi tiết, Kakashi đã tạo nên một sản phẩm vừa tiện lợi lại vừa thời trang, phù hợp để các bạn học sinh, sinh viên",
            type: "thuong",
            material: "Poliester 1000D, Nylon Ripstop",
            size: "41 x 26 x 14 cm",
            qty: 1
        },
        {
            id: 12,
            nameprod: "Kakashi Ena Backpack S Red",
            price: 59,
            img: "12.jpg",
            note: "Kakashi Ena Backpack là dòng balo thời trang với thiết kế nhỏ gọn mang đến phong cách trẻ trung, năng động.",
            type: "thuong",
            material: "Polyester Two Tone Oxford",
            size: "33 x 25 x 10 cm",
            qty: 1
        },
        {
            id: 13,
            nameprod: "Kakashi Koshi Backpack M Red",
            price: 19,
            img: "13.jpg",
            note: "Kakashi Koshi Backpack là dòng balo xếp gọn đến từ thương hiệu mang đậm phong cách Nhật Bản. Ngay từ khi ra mắt, mẫu túi xách thể thao này đã nhận được sự yêu thích của rất nhiều các bạn trẻ bởi thiết kế năng động, tiện lợi",
            type: "dulich",
            material: "Nylon",
            size: "48 x 37 x 19cm",
            qty: 1
        },
        {
            id: 14,
            nameprod: "Seliux F35 Lightning II Backpack M Black",
            price: 29,
            img: "14.jpg",
            note: "Seliux F35 Lightning II Backpack là sản phẩm độc quyền của thương hiệu Seliux. Balo phù hợp đi học, đi làm hoặc tham gia các hoạt động ngoài trời",
            type: "thuong",
            material: "Chicken Tex",
            size: "44 x 28 x 14cm",
            qty: 1
        },
        {
            id: 15,
            nameprod: "Seliux G2 Lightning Backpack M Black",
            price: 79,
            img: "15.jpg",
            note: "Seliux G2 Lightning Backpack là sản phẩm balo thời trang, sự đổi mới trong thiết kế của các dòng balo thương hiệu Seliux. Balo có thể sử dụng để khi đến trường, đi làm, du lịch hay các hoạt động khác.",
            type: "thuong",
            material: "1000D Chicken Tex",
            size: "50 x 28 x 14 cm",
            qty: 1
        },
        {
            id: 16,
            nameprod: "Kakashi Yaku Waistpack S D.Grey",
            price: 19,
            img: "16.jpg",
            note: "Kakashi Yaku Waistpack S D.Grey là dòng sản phẩm túi bao tử - túi đeo hông. Túi được thiết kế nhỏ nhắn, mang phong cách khỏe khoắn. Có thể sử dụng đi chơi, đi du lịch....",
            type: "deocheo",
            material: "Polyester",
            size: "37 x 7,5 x 15cm",
            qty: 1
        },
        {
            id: 17,
            nameprod: "Kakashi Taiko 2 S Navy",
            price: 24,
            img: "17.jpg",
            note: "Kakashi Taiko Bag S có dạng túi trống nhưng kích thước rất nhỏ gọn, làm từ chất liệu Polyester và nylon giúp hạn chế thấm nước tốt. Quai túi khá dài dễ dàng đeo chéo vai, phù hợp trong cách hoạt động thể thao, dạo phố, vui chơi,...",
            type: "dulich",
            material: "Polyester",
            size: "22 x 11 x 11 cm",
            qty: 1
        },
        {
            id: 18,
            nameprod: "Tricsport Sandstorm Messenger M Black",
            price: 99,
            img: "18.jpg",
            note: "Tricsport Sandstorm Messenger M Black là một dòng túi đeo chéo/túi đeo 1 bên mới xuất hiện, mang đậm phong cách mạnh mẽ và cá tính. Balo còn được tích hợp hàng ngàn tiện ích mà khi gặp bạn sẽ đổ gục từ lần đầu tiên.",
            type: "deocheo",
            material: "Cordura",
            size: "46 x 30 x 12cm",
            qty: 1
        },
        {
            id: 19,
            nameprod: "Kakashi Ine Sling S Gray",
            price: 19,
            img: "19.jpg",
            note: "Kakashi Ine Sling S Gray là mẫu túi xách thời trang có thiết kế nhỏ gọn, tiện lợi đến từ thương hiệu balo, túi xách mang đậm phong cách Nhật Bản. Với sự tỉ mỉ trong từng chi tiết, Kakashi đã tạo nên một sản phẩm vừa tiện lợi lại vừa thời trang",
            type: "deocheo",
            material: "Polyester, Nylon",
            size: "17 x 9 x 12 cm",
            qty: 1
        },
        {
            id: 20,
            nameprod: "Seliux M10 Hercules Bag S Red",
            price: 27,
            img: "20.jpg",
            note: "Seliux M10 Hercules Bag S Red là dòng sản phẩm túi đeo chéo cao cấp, thời trang của thương hiệu Seliux. Túi xách Seliux vượt trội về chất lượng lẫn kiểu dáng, mẫu mã.",
            type: "deocheo",
            material: "Checken Tex SupremeTM",
            size: "27 x 24 x 7 cm",
            qty: 1
        },
        {
            id: 21,
            nameprod: "Seliux M9 Stryker Bag S Moss",
            price: 19,
            img: "21.jpg",
            note: "Seliux M9 Stryker Bag S Moss là dòng sản phẩm túi bao tử một quai thời trang của thương hiệu Seliux. Các sản phẩm balo, túi xách, phụ kiện của Seliux đều được làm từ chất liệu cao cấp được kiểm định nghiêm ngặt.",
            type: "deocheo",
            material: "210D Ripstop",
            size: "25 x 16 x 6.5cm",
            qty: 1
        },
        {
            id: 22,
            nameprod: "Seliux G1 Raptor Backpack M Black",
            price: 50,
            img: "22.jpg",
            note: "Seliux G1 Raptor Backpack M Black là balo thương hiệu độc quyền Seliux. Các sản phẩm balo, túi xách, phụ kiện của Seliux đều được làm từ chất liệu cao cấp được kiểm định nghiêm ngặt.",
            type: "dulich",
            material: "1000D Chicken Tex",
            size: "42 x 29 x 12cm",
            qty: 1
        },
        {
            id: 23,
            nameprod: "Seliux G2 Lightning Backpack M Moss",
            price: 69,
            img: "23.jpg",
            note: "Seliux G2 Lightning Backpack M Moss là sản phẩm balo thời trang, sự đổi mới trong thiết kế của các dòng balo thương hiệu Seliux. Balo có thể sử dụng để khi đến trường, đi làm, du lịch hay các hoạt động khác.",
            type: "dulich",
            material: "1000D Chicken Tex",
            size: "50 x 28 x 14 cm",
            qty: 1
        },
        {
            id: 24,
            nameprod: "Korin Clickpack Pro M D.Grey/Black",
            price: 699,
            img: "24.jpg",
            note: "Korin Clickpack Pro M D.Grey/Black là sản phẩm balo laptop chống trộm tối ưu được biết đến qua những giải thưởng quốc tế uy tín, đến từ thương hiệu KORIN. Thiết kế theo phong cách Châu Âu và qua quy trình kiểm định chất lượng nghiêm ngặt.",
            type: "thuong",
            material: "	Polyester",
            size: "46 x 34 x 16 cm",
            qty: 1
        },
        {
            id: 25,
            nameprod: "Adidas NMD Backpack M Black",
            price: 39,
            img: "25.jpg",
            note: "Adidas NMD Backpack M Black là dòng sản phẩm túi trống tiện lợi, phù hợp đi chơi, đi tập gym hoặc đi du lịch 2,3 ngày. Túi trống gọn nhẹ, dễ dàng đeo hoặc xách theo bên mình.",
            type: "thuong",
            material: "polyurethane",
            size: "30 cm x 47 cm x 13 cm",
            qty: 1
        },


    ]
    $scope.carts = [
        {
            id: 5,
            nameprod: "Kakashi Minko Backpack M Black",
            price: 79,
            img: "5.jpg",
            note: "Kakashi Minko Backpack là mẫu balo chống nước có thiết kế năng động, hiện đại đến từ thương hiệu balo, túi xách cao cấp Kakashi. Với sự tỉ mỉ trong từng chi tiết, Kakashi đã tạo nên một sản phẩm vừa tiện lợi lại thời trang",
            type: "thuong",
            material: "Polyester",
            size: "40 x 30 x 12cm",
            qty: 1
        },
        {
            id: 6,
            nameprod: "Tricsport Sandstorm Backpack M Sandstone",
            price: 169,
            img: "6.jpg",
            note: "Tricsport Sandstorm Backpack là một dòng balo mới xuất hiện, mang đậm phong cách mạnh mẽ và cá tính. Balo còn được tích hợp hàng ngàn tiện ích mà khi gặp bạn sẽ đổ gục từ lần đầu tiên. Balo cực tiện lợi phù hợp cho những chuyến đi xa hoặc du lịch.",
            type: "dulich",
            material: "Cordura",
            size: "44 x 27 x 18cm",
            qty: 1
        },
        {
            id: 7,
            nameprod: "Tricsport Transporter Backpack M D.Grey",
            price: 119,
            img: "7.jpg",
            note: "Tricsport Transporter Backpack là mẫu balo du lịch có kiểu dáng gọn gàng, trẻ trung đến từ thương hiệu balo, túi xách nổi tiếng. Với sự chú trọng về tiện ích cho người dùng, hãng đã tạo nên một sản phẩm balo đa năng có thiết kế nhiều ngăn tiện lợi rất độc đáo cùng vẻ ngoài tối giản, thanh lịch có thể đồng hành cùng bạn trong mọi chuyến đi. ",
            type: "dulich",
            material: "NYLON 550D",
            size: "35 x 21 x 50 cm",
            qty: 1
        },
        {
            id: 8,
            nameprod: "Seliux F3 Demon Backpack M Navy",
            price: 99,
            img: "8.jpg",
            note: "Seliux F3 Demon Backpack là balo thương hiệu độc quyền Seliux. Các sản phẩm balo, túi xách, phụ kiện của Seliux đều được làm từ chất liệu cao cấp được kiểm định nghiêm ngặt.",
            type: "dulich",
            material: "Chicken Tex",
            size: "53 x 31.5 x 18cm",
            qty: 1
        },
        {
            id: 9,
            nameprod: "Seliux F6 Skyray Backpack M Grey",
            price: 119,
            img: "9.jpg",
            note: "Seliux F6 Skyray Backpack được chú trọng đầu tư về chất liệu, đem đến cho mọi người sản phẩm balo hoàn hảo về chức năng và sử dụng linh hoạt trong nhiều điều kiện thời tiết khác nhau.",
            type: "thuong",
            material: "Chicken Tex, 420D RipStop",
            size: "43 x 30 x 12 cm",
            qty: 1
        },
        {
            id: 17,
            nameprod: "Kakashi Taiko 2 S Navy",
            price: 24,
            img: "17.jpg",
            note: "Kakashi Taiko Bag S có dạng túi trống nhưng kích thước rất nhỏ gọn, làm từ chất liệu Polyester và nylon giúp hạn chế thấm nước tốt. Quai túi khá dài dễ dàng đeo chéo vai, phù hợp trong cách hoạt động thể thao, dạo phố, vui chơi,...",
            type: "dulich",
            material: "Polyester",
            size: "22 x 11 x 11 cm",
            qty: 1
        },
        {
            id: 18,
            nameprod: "Tricsport Sandstorm Messenger M Black",
            price: 99,
            img: "18.jpg",
            note: "Tricsport Sandstorm Messenger M Black là một dòng túi đeo chéo/túi đeo 1 bên mới xuất hiện, mang đậm phong cách mạnh mẽ và cá tính. Balo còn được tích hợp hàng ngàn tiện ích mà khi gặp bạn sẽ đổ gục từ lần đầu tiên.",
            type: "deocheo",
            material: "Cordura",
            size: "46 x 30 x 12cm",
            qty: 1
        },
        {
            id: 19,
            nameprod: "Kakashi Ine Sling S Gray",
            price: 19,
            img: "19.jpg",
            note: "Kakashi Ine Sling S Gray là mẫu túi xách thời trang có thiết kế nhỏ gọn, tiện lợi đến từ thương hiệu balo, túi xách mang đậm phong cách Nhật Bản. Với sự tỉ mỉ trong từng chi tiết, Kakashi đã tạo nên một sản phẩm vừa tiện lợi lại vừa thời trang",
            type: "deocheo",
            material: "Polyester, Nylon",
            size: "17 x 9 x 12 cm",
            qty: 1
        },
        {
            id: 20,
            nameprod: "Seliux M10 Hercules Bag S Red",
            price: 27,
            img: "20.jpg",
            note: "Seliux M10 Hercules Bag S Red là dòng sản phẩm túi đeo chéo cao cấp, thời trang của thương hiệu Seliux. Túi xách Seliux vượt trội về chất lượng lẫn kiểu dáng, mẫu mã.",
            type: "deocheo",
            material: "Checken Tex SupremeTM",
            size: "27 x 24 x 7 cm",
            qty: 1
        },
    ]

    var obj = {};
    $scope.cart = [];
    $scope.total = 0;
    $scope.totalItem = 0;
    $scope.add = function (p) {
        if ($scope.cart.indexOf(p) != -1) {
            $scope.cart[$scope.cart.indexOf(p)].soluong++;
        } else {
            obj = p;
            obj.soluong = 1;
            $scope.cart.push(obj);

        }
        $scope.total += obj.price;
        $scope.totalItem++;
    };
    $scope.remove = function (index) {
        $scope.total = $scope.total - ($scope.cart[index].soluong * $scope.cart[index].price);
        $scope.totalItem -= $scope.cart[index].soluong;
        $scope.cart.splice(index, 1);
    };
    $scope.saveCart =function(){
        localStorage.getItem("product",JSON.stringify($scope.cart));
        window.location.href = "checkout.html";
    };
    $scope.btnTang = function (cart) {
        $scope.cart[$scope.cart.indexOf(cart)].soluong++;
        $scope.total = $scope.total + $scope.cart[$scope.cart.indexOf(cart)].price;
        $scope.totalItem++;
    };
    $scope.btnGiam = function (cart) {
        $scope.cart[$scope.cart.indexOf(cart)].soluong--;
        $scope.total = $scope.total - $scope.cart[$scope.cart.indexOf(cart)].price;
        $scope.totalItem--;
    };
    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.products.length / 8);
    $scope.first = function () {
        $scope.begin = 0;
    };
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 8) {
            $scope.begin += 8;
        }
    };
    $scope.previus = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 8;
        }
    };
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 8


    };

});

