<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Tags  -->
    <?php include "notice-metaTags.html"; ?>
    <!-- Head Template com Styles -->
    <?php include "notice-head-template.html"; ?>
</head>
<body>
<div class="col-md-12">
    <!-- Header Session -->
    <?php include "../../components/header/header.html"; ?>
    <!-- Notice Body Session -->
    <?php include "../../components/noticePageBody/noticePageBody.php" ?>
    <!-- Coments Session -->
    <div class="col-md-12">
        <?php include "../../components/coments/coments.html" ?>    
    </div>
    <!-- Footer Session -->
    <?php include "../../components/footer/footer.html"; ?>
</div>
    <!-- Scripts Template -->
    <?php include "notice-scripts-template.html" ?>
    
</body>
</html>