var addButton = $("#add-button");
var inputValue = $(".input-item");
var container = $(".container");

    function createDiv(itemName) {

        var input = $("<input>");
        input.value = itemName;
        input.attr("disabled", true);
        input.addClass("input-item w-25");
        input.type = "text";

        var itemBox = $("<div>");
        itemBox.addClass("item text-center");
        itemBox.css("margin", "auto");
        itemBox.css("margin-top", "8px");

        var editButton = $("<button>");
        editButton.addClass("editButton btn btn-success btn-sm");
        editButton.html(`<i class= "fas fa-edit"></i>`)
        editButton.css("margin", "5px");

        var deleteButton = $("<button>");
        deleteButton.addClass("deleteButton btn btn-danger btn-sm");
        deleteButton.html(`<i class= "fas fa-trash-alt"></i>`)

        container.append(itemBox);

        itemBox.append(input, editButton, deleteButton);
        
        editButton.on("click", () => this.edit(input));

        deleteButton.on("click", () => this.removeItem());
    }

    function edit(input) {
        input.prop("disabled", !input.prop("disabled"));
        }

    function removeItem(itemBox) {
        container.remove(itemBox);
    }



createDiv("sports");