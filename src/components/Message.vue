<template>
    <div class="containerMessage">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default{
    name: "Message",
    props: {
        msg: String
    }
}

</script>


<style>
    .containerMessage{

        max-width: 80%;
        margin: auto;
        text-align: center;
        margin-top: 2rem;
        padding: .5rem;
        border-radius: .5rem;

        color: #004085;
        background: #CCE5FF;
        border: 1px solid #B8DAff;
    }
</style>