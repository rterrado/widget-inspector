<?php 
    $click = (isset($snippet['click'])) ? 'xclick="'.$snippet['click'].'()"' : '';
    $type  = (isset($snippet['type'])) ? 'type="'.$snippet['type'].'"' : '';
    $text  = $snippet['text'];
    $background = $snippet['color-type'];
    $color = $snippet['color'];
?>

<button <?php echo $click.' '.$type ?> class="outline-none:focus btn-loadable cursor-pointer text-5 padding-x-11 padding-y-7 border-radius-extra-small-11 border-style-none background-color-<?php echo $background; ?> color-<?php echo $color; ?>">
    <?php echo $text; ?>
</button>